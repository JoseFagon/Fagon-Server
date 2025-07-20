import { DateTime } from 'luxon';
import { DateUtils } from './date.utils';
import * as Handlebars from 'handlebars';
import { Photo } from '@prisma/client';

interface Location {
  locationType: string;
  [key: string]: unknown;
}

interface Pavement {
  pavement: string;
  area?: number;
  height?: number;
}

const locationLabelMap: Record<string, string> = {
  fachada: 'Fachada',
  espera_atendimento: 'Espera Atendimento',
  atendimento: 'Atendimento',
  'auto_-_atendimento': 'Auto-Atendimento',
  'auto_-_atendimento_-_6_horas': 'Auto-Atendimento - 6 Horas',
  'manutencao_auto_-_atendimento': 'Manutenção Auto-Atendimento',
  'casa_maquinas_-_ar_condicionado': 'Casa Máquinas - Ar Condicionado',
  sala_online: 'Sala Online',
  espera_caixas: 'Espera Caixas',
  caixas: 'Caixas',
  espera_gerencia: 'Espera Gerência',
  gerencia: 'Gerência (GGA)',
  expediente: 'Expediente',
  tesouraria: 'Tesouraria',
  copa: 'Copa',
  circulacao: 'Circulação',
  descanso: 'Descanso',
  sala_go: 'Sala G.O.',
  almoxarifado: 'Almoxarifado',
  sala_de_reuniao: 'Sala de Reunião',
  hall_spcd: 'Hall SPCD',
  spcd_masculino: 'SPCD Masculino',
  spcd_feminino: 'SPCD Feminino',
  spcd_unissex: 'SPCD Unissex',
  sanitario_masculino: 'Sanitário Masculino',
  sanitario_feminino: 'Sanitário Feminino',
  dml: 'DML',
  dls: 'DLS',
};

const floorLabelMap: Record<string, string> = {
  ceramico: 'Cerâmico',
  porcelanato: 'Porcelanato',
  vinilico: 'Vinílico',
  cimentado: 'Cimentado',
  carpete: 'Carpete',
  granito: 'Granito',
  ardosia: 'Ardósia',
  madeira: 'Madeira',
  outro: 'Outro',
};

const ceilingLabelMap: Record<string, string> = {
  gesso_acartonado: 'Gesso Acartonado',
  laje: 'Laje',
  amadeirado: 'Amadeirado',
  mineral_acustico: 'Mineral Acústico',
  outro: 'Outro',
};

const wallLabelMap: Record<string, string> = {
  alvenaria: 'Alvenaria',
  drywall: 'Drywall (Gesso)',
  vidros: 'Vidros',
  grades: 'Grades',
  mdf: 'MDF',
  outro: 'Outro',
};

export function registerHandlebarsHelpers(): void {
  const formatPavementName = (name: string): string => {
    const replacements: Record<string, string> = {
      '3_subsolo': '3º Subsolo',
      '2_subsolo': '2º Subsolo',
      subsolo: 'Subsolo',
      terreo: 'Térreo',
      mezanino: 'Mezanino',
      '1_andar': '1º Andar',
      '2_andar': '2º Andar',
      '3_andar': '3º Andar',
      '4_andar': '4º Andar',
      '5_andar': '5º Andar',
    };
    return replacements[name.toLowerCase()] || name;
  };

  const formatMaterial = (type: string, value: string): string => {
    const maps: Record<string, Record<string, string>> = {
      piso: floorLabelMap,
      forro: ceilingLabelMap,
      parede: wallLabelMap,
    };

    const map = maps[type] || {};

    if (map[value]) {
      return map[value];
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  Handlebars.registerHelper('formatLocationName', function (value: string) {
    return locationLabelMap[value] || value;
  });

  Handlebars.registerHelper(
    'joinMaterialsWithSlash',
    function (
      materials: Array<{ surface: string; materialFinishing: string }>,
      surfaceType: string,
    ) {
      if (!Array.isArray(materials)) return '—';

      const filtered = materials
        .filter((m) => m.surface === surfaceType)
        .map((m) => {
          const material = m.materialFinishing.trim();
          return formatMaterial(surfaceType, material);
        });

      return filtered.length > 0 ? filtered.join(' / ') : '—';
    },
  );

  Handlebars.registerHelper(
    'formatDate',
    function (date: Date | string, pattern: string = 'MMMM, yyyy'): string {
      try {
        if (!date) return '';

        const dt =
          typeof date === 'string'
            ? DateTime.fromISO(date)
            : DateTime.fromJSDate(date);

        if (!dt.isValid) return '';

        const formatPattern: string =
          typeof pattern === 'string' && pattern.trim()
            ? pattern
            : 'MMMM, yyyy';

        if (formatPattern === 'MMMM, yyyy') {
          return dt.setLocale('pt-BR').toLocaleString({
            month: 'long',
            year: 'numeric',
          });
        }

        return dt.toFormat(formatPattern, { locale: 'pt-BR' });
      } catch (error) {
        console.error('Format date error:', error);
        return '';
      }
    },
  );

  Handlebars.registerHelper('addOne', function (value: number) {
    return value + 1;
  });

  Handlebars.registerHelper(
    'ifMoreThanOnePhoto',
    function (
      this: Record<string, unknown>,
      photos: unknown,
      options: Handlebars.HelperOptions,
    ): Handlebars.SafeString | string {
      if (Array.isArray(photos) && photos.length > 1) {
        return options.fn(this);
      }
      return '';
    },
  );

  Handlebars.registerHelper(
    'formatDateTime',
    function (datetime: Date | string, pattern?: string): string {
      try {
        return DateUtils.formatDateTime(datetime, pattern) || '';
      } catch {
        return '';
      }
    },
  );

  Handlebars.registerHelper('now', function (): string {
    return DateUtils.formatDateTime(DateUtils.now()) || '';
  });

  Handlebars.registerHelper(
    'filterLocations',
    function (locations: Location[], type: string): Location[] {
      if (!Array.isArray(locations)) {
        console.error('filterLocations: locations não é um array', locations);
        return [];
      }
      return locations.filter(
        (loc) => loc.locationType.toLowerCase() === type.toLowerCase(),
      );
    },
  );

  Handlebars.registerHelper(
    'lookup',
    function (obj: Record<string, unknown> | null | undefined, key: string) {
      if (!obj || typeof obj !== 'object') return undefined;
      return obj[key];
    },
  );

  Handlebars.registerHelper(
    'eq',
    function (
      this: unknown,
      a: unknown,
      b: unknown,
      options?: Handlebars.HelperOptions,
    ): string | boolean {
      if (!options) {
        return a === b;
      }

      const result = a === b;

      if (result) {
        return typeof options.fn === 'function' ? options.fn(this) : '';
      } else {
        return typeof options.inverse === 'function'
          ? options.inverse(this)
          : '';
      }
    },
  );

  Handlebars.registerHelper(
    'filterValidLocations',
    function (locations: Location[], lastName: string) {
      return locations.filter(
        (loc) => loc.name !== 'fachada' && loc.name !== lastName,
      );
    },
  );

  Handlebars.registerHelper(
    'filter',
    function (arr: unknown[], prop: string, value: unknown) {
      return Array.isArray(arr) ? arr.filter((i) => i?.[prop] === value) : [];
    },
  );

  Handlebars.registerHelper(
    'formatNumber',
    function (number: number | undefined | null): string {
      if (number === undefined || number === null) return '—';
      const formatted = Number(number).toFixed(2);

      return formatted.replace('.', ',');
    },
  );

  Handlebars.registerHelper(
    'filterPhotosByLocationId',
    function (photos: Photo[], locationId: string) {
      return photos.filter((photo) => photo.locationId === locationId);
    },
  );

  Handlebars.registerHelper('formatPavementName', formatPavementName);

  Handlebars.registerHelper(
    'sortPavements',
    function (pavements: Pavement[]): Pavement[] {
      const order = [
        'subsolo',
        'terreo',
        'mezanino',
        '1_andar',
        '2_andar',
        '3_andar',
        '4_andar',
        '5_andar',
      ];

      if (!Array.isArray(pavements)) return [];

      return [...pavements].sort((a, b) => {
        return order.indexOf(a.pavement) - order.indexOf(b.pavement);
      });
    },
  );

  Handlebars.registerHelper(
    'formatPavementList',
    function (pavements: Array<{ pavement: string }>) {
      if (!pavements || pavements.length === 0) return '—';

      const order = [
        'subsolo',
        'terreo',
        'mezanino',
        '1_andar',
        '2_andar',
        '3_andar',
        '4_andar',
      ];

      const sorted = pavements
        .map((p) => p.pavement.toLowerCase())
        .filter((p, i, arr) => arr.indexOf(p) === i)
        .sort((a, b) => order.indexOf(a) - order.indexOf(b));

      const processed = sorted.map((p) => formatPavementName(p));

      if (processed.length === 0) return '—';
      if (processed.length === 1) return processed[0];

      const last = processed.pop();
      return `${processed.join(', ')} e ${last}`;
    },
  );

  Handlebars.registerHelper(
    'formatFloorHeight',
    function (floorHeight: string): string {
      if (!floorHeight) return '';

      const formatted = floorHeight.replace(
        /(\d+,\d{2})(?=\s*(a|e|-|$))/gi,
        '$1m',
      );

      return formatted;
    },
  );

  Handlebars.registerHelper('formatCNPJ', function (cnpj: string): string {
    if (!cnpj) return '';
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.$2.$3/$4-$5',
    );
  });

  Handlebars.registerHelper('formatCPF', function (cpf: string): string {
    if (!cpf) return '';
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  });

  Handlebars.registerHelper('formatCEP', function (cep: string): string {
    if (!cep) return '';
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  });

  Handlebars.registerHelper('formatPhone', function (phone: string): string {
    if (!phone) return '';
    return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  });

  Handlebars.registerHelper(
    'formatNumberAgency',
    function (agencyNumber: string): string {
      return agencyNumber.toString().padStart(4, '0');
    },
  );
}

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
  'auto_-_atendimento': 'Auto-Atendimento',
  caixas: 'Caixas',
  guiche_atendimento: 'Guichê de Atendimento',
  salao_principal: 'Salão Principal',
  area_prioritaria: 'Área Prioritária',
  sala_reunioes: 'Sala de Reuniões',
  escritorios_internos: 'Escritórios Internos',
  cofre: 'Cofre',
  banheiro: 'Banheiro',
  area_descanso: 'Área de Descanso',
  sala_servidores: 'Sala de Servidores',
  outros: 'Outros',
};

const floorLabelMap: Record<string, string> = {
  ceramico: 'Cerâmico',
  porcelanato: 'Porcelanato',
  vinilico: 'Vinílico',
  cimentado: 'Cimentado',
  carpete: 'Carpete',
  granito: 'Granito',
  ardosia: 'Ardósia',
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
      subsolo: 'subsolo',
      terreo: 'térreo',
      mezanino: 'mezanino',
      '1_andar': '1º andar',
      '2_andar': '2º andar',
      '3_andar': '3º andar',
      '4_andar': '4º andar',
      '5_andar': '5º andar',
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
    return map[value] || value;
  };

  Handlebars.registerHelper('formatLocationName', function (value: string) {
    return locationLabelMap[value] || value;
  });

  Handlebars.registerHelper('formatFloorMaterial', function (value: string) {
    return floorLabelMap[value] || value;
  });

  Handlebars.registerHelper('formatCeilingMaterial', function (value: string) {
    return ceilingLabelMap[value] || value;
  });

  Handlebars.registerHelper('formatWallMaterial', function (value: string) {
    return wallLabelMap[value] || value;
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
          return formatMaterial(surfaceType, m.materialFinishing.trim());
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

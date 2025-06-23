import { DateTime } from 'luxon';
import { DateUtils } from './date.utils';
import * as Handlebars from 'handlebars';

interface Location {
  locationType: string;
  [key: string]: unknown;
}

interface Pavement {
  pavement: string;
  area?: number;
  height?: number;
}

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
      if (!Array.isArray(locations)) return [];
      return locations.filter((loc) => loc.locationType === type);
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
      if (arguments.length < 4 || !options) {
        return a === b;
      }
      return a === b ? options.fn(this) : options.inverse?.(this);
    },
  );

  Handlebars.registerHelper(
    'formatNumber',
    function (number: number | undefined | null): string {
      if (number === undefined || number === null) return '—';
      return number.toString().replace('.', ',');
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

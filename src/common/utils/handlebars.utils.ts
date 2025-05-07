import { DateUtils } from './date.utils';
import * as Handlebars from 'handlebars';

interface Location {
  locationType: string;
  [key: string]: unknown;
}

export function registerHandlebarsHelpers(): void {
  Handlebars.registerHelper(
    'formatDate',
    function (date: Date | string, pattern?: string): string {
      try {
        return DateUtils.formatDate(date, pattern) || '';
      } catch {
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
      return locations.filter((loc) => loc.locationType === type);
    },
  );

  Handlebars.registerHelper(
    'eq',
    function (
      this: unknown,
      a: unknown,
      b: unknown,
      options: Handlebars.HelperOptions,
    ): string {
      return a === b ? options.fn(this) : options.inverse(this);
    },
  );

  Handlebars.registerHelper('formatCNPJ', function (cnpj: string): string {
    if (!cnpj) return '';
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.$2.$3/$4-$5',
    );
  });

  Handlebars.registerHelper('formatCEP', function (cep: string): string {
    if (!cep) return '';
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  });
}

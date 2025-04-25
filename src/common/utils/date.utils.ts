import {
  format,
  parseISO,
  addDays,
  subDays,
  isBefore,
  isAfter,
  isEqual,
  differenceInDays,
  startOfDay,
  endOfDay,
  isValid,
  isDate,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class DateUtils {
  private static readonly DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';
  private static readonly DEFAULT_DATETIME_FORMAT = 'dd/MM/yyyy HH:mm:ss';

  /**
   * Formata uma data para string
   * @param date Data a ser formatada
   * @param pattern Formato desejado (default: 'dd/MM/yyyy')
   */
  static formatDate(date: Date | string, pattern?: string): string {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(parsedDate)) throw new Error('Invalid date');

    return format(parsedDate, pattern || this.DEFAULT_DATE_FORMAT, {
      locale: ptBR,
    });
  }

  /**
   * Formata uma data/hora para string
   * @param datetime Data/hora a ser formatada
   * @param pattern Formato desejado (default: 'dd/MM/yyyy HH:mm:ss')
   */
  static formatDateTime(datetime: Date | string, pattern?: string): string {
    const parsedDate =
      typeof datetime === 'string' ? parseISO(datetime) : datetime;
    if (!isValid(parsedDate)) throw new Error('Invalid datetime');

    return format(parsedDate, pattern || this.DEFAULT_DATETIME_FORMAT, {
      locale: ptBR,
    });
  }

  /**
   * Adiciona dias a uma data
   * @param date Data base
   * @param days Quantidade de dias a adicionar
   */
  static addDays(date: Date | string, days: number): Date {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return addDays(parsedDate, days);
  }

  /**
   * Subtrai dias de uma data
   * @param date Data base
   * @param days Quantidade de dias a subtrair
   */
  static subtractDays(date: Date | string, days: number): Date {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return subDays(parsedDate, days);
  }

  /**
   * Verifica se a data1 é anterior a data2
   * @param date1 Primeira data
   * @param date2 Segunda data
   */
  static isBefore(date1: Date | string, date2: Date | string): boolean {
    const parsedDate1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const parsedDate2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isBefore(parsedDate1, parsedDate2);
  }

  /**
   * Verifica se a data1 é posterior a data2
   * @param date1 Primeira data
   * @param date2 Segunda data
   */
  static isAfter(date1: Date | string, date2: Date | string): boolean {
    const parsedDate1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const parsedDate2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isAfter(parsedDate1, parsedDate2);
  }

  /**
   * Verifica se duas datas são iguais (ignorando horas, minutos, segundos)
   * @param date1 Primeira data
   * @param date2 Segunda data
   */
  static isSameDay(date1: Date | string, date2: Date | string): boolean {
    const parsedDate1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const parsedDate2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isEqual(startOfDay(parsedDate1), startOfDay(parsedDate2));
  }

  /**
   * Retorna a diferença em dias entre duas datas
   * @param startDate Data inicial
   * @param endDate Data final
   */
  static diffInDays(startDate: Date | string, endDate: Date | string): number {
    const parsedStart =
      typeof startDate === 'string' ? parseISO(startDate) : startDate;
    const parsedEnd = typeof endDate === 'string' ? parseISO(endDate) : endDate;
    return differenceInDays(parsedEnd, parsedStart);
  }

  /**
   * Retorna o primeiro momento do dia (00:00:00)
   * @param date Data base
   */
  static startOfDay(date: Date | string): Date {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return startOfDay(parsedDate);
  }

  /**
   * Retorna o último momento do dia (23:59:59)
   * @param date Data base
   */
  static endOfDay(date: Date | string): Date {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return endOfDay(parsedDate);
  }

  /**
   * Retorna a data atual
   */
  static now(): Date {
    return new Date();
  }

  /**
   * Converte string para Date
   * @param dateString String no formato ISO (YYYY-MM-DD) ou similar
   */
  static parseDate(dateString: string): Date {
    return parseISO(dateString);
  }

  /**
   * Verifica se um valor é uma data válida
   * @param value Valor a ser verificado
   */
  static isValidDate(value: unknown): boolean {
    if (isDate(value)) return isValid(value);
    if (typeof value === 'string') return isValid(parseISO(value));
    return false;
  }
}

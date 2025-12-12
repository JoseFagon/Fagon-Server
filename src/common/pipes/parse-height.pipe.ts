import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class ParseHeightObjectPipe implements PipeTransform {
  transform(value: any): any {
    if (value === null || value === undefined) {
      return value;
    }

    // Se não for objeto, retorna como está
    if (typeof value !== 'object') {
      return value;
    }

    // Cria uma cópia do objeto
    const result = { ...value };

    // Converte apenas o campo height se existir
    if ('height' in result) {
      result.height = this.parseHeightValue(result.height);
    }

    return result;
  }

  private parseHeightValue(value: any): number | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value === 'number') {
      return value >= 0 && value <= 1000 ? value : null;
    }

    if (typeof value === 'string') {
      const cleanValue = value.trim().replace(',', '.');
      const numericValue = cleanValue.replace(/[^\d.-]/g, '');
      const num = parseFloat(numericValue);

      return !isNaN(num) && num >= 0 && num <= 1000 ? num : null;
    }

    return null;
  }
}

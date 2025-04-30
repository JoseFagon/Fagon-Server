import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { DateUtils } from '../../common/utils/date.utils';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type (formato ISO)';

  serialize(value: unknown): string {
    if (!DateUtils.isValidDate(value)) {
      throw new Error('DateScalar: Valor inválido para serialização');
    }
    return DateUtils.formatDateTime(value as Date, 'yyyy-MM-dd');
  }

  parseValue(value: unknown): Date {
    if (typeof value !== 'string') {
      throw new Error('DateScalar: Apenas strings ISO são aceitas');
    }
    return DateUtils.parseDate(value);
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.STRING) {
      return this.parseValue(ast.value);
    }
    throw new Error('DateScalar: Apenas literais string são aceitos');
  }
}

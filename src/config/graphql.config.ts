import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Request } from 'express';
import { DateScalar } from 'src/graphql/scalars/date.scalar';

export const graphqlConfig: GqlModuleOptions & ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  resolvers: { Date: new DateScalar() },
  sortSchema: true,
  debug: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
  context: ({ req }: { req: Request }) => ({ req }),
  buildSchemaOptions: {
    dateScalarMode: 'timestamp',
  },
};

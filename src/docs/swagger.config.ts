import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import packageJson from '../../package.json';
import { OpenAPIV3 } from 'openapi-types';

interface Package {
  version: string;
}

const typedPackage = packageJson as Package;

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: typedPackage.version,
      description: 'Documentação da API do projeto',
      contact: {
        name: 'Suporte',
        email: 'suporte@empresa.com',
      },
      license: {
        name: 'MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor de desenvolvimento',
      },
      {
        url: 'https://api.producao.com/v1',
        description: 'Servidor de produção',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Pagination: {
          type: 'object',
          properties: {
            data: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
            total: {
              type: 'integer',
              example: 100,
            },
            perPage: {
              type: 'integer',
              example: 10,
            },
            currentPage: {
              type: 'integer',
              example: 1,
            },
            lastPage: {
              type: 'integer',
              example: 10,
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'integer',
              example: 400,
            },
            message: {
              type: 'string',
              example: 'Mensagem de erro',
            },
            error: {
              type: 'string',
              example: 'Bad Request',
            },
          },
        },
      },
    },
  },
  apis: [
    './src/routes/*.ts',
    './src/controllers/*.ts',
    './src/dtos/*.ts',
    './src/models/*.ts',
  ],
};

const specs = swaggerJsdoc(options) as OpenAPIV3.Document;

const setupSwagger = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customSiteTitle: 'API Documentation',
      customCss: '.swagger-ui .topbar { display: none }',
      swaggerOptions: {
        docExpansion: 'none',
        filter: true,
        showRequestDuration: true,
      },
    }),
  );
};

export default setupSwagger;

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import packageJson from '../../package.json';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Documentação da API do projeto')
    .setVersion(packageJson.version)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    // .addServer('http://localhost:3000/', 'Development')
    .addServer('https://fagon-server.onrender.com/', 'Production')
    .setContact('Suporte', '', 'suporte@empresa.com')
    .setLicense('MIT', '')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    explorer: true,
    customSiteTitle: 'API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
};

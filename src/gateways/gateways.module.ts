import { Module } from '@nestjs/common';
import { ProjectGateway } from './project.gateway';
import { NotificationGateway } from './notifications.gateway';

@Module({
  providers: [NotificationGateway, ProjectGateway],
  exports: [NotificationGateway, ProjectGateway], // Exporta para uso em outros módulos
})
export class GatewaysModule {}

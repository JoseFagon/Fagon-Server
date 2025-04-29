import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/projects' })
export class ProjectGateway {
  @WebSocketServer() server!: Server;

  // Ouvinte de eventos do cliente
  @SubscribeMessage('update-project')
  handleProjectUpdate(
    client: Socket,
    payload: { projectId: string; data: any },
  ) {
    // Broadcast para todos exceto o emissor
    client.broadcast.emit('project-updated', payload);

    // Ou para uma sala específica (ex: projeto específico)
    this.server
      .to(`project_${payload.projectId}`)
      .emit('project-updated', payload);
  }

  // Entrar em uma sala (para updates específicos)
  @SubscribeMessage('join-project-room')
  handleJoinProjectRoom(client: Socket, projectId: string) {
    client.join(`project_${projectId}`);
  }
}

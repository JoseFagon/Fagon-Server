import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/projects' })
export class ProjectGateway {
  @WebSocketServer() server!: Server;

  @SubscribeMessage('update-project')
  handleProjectUpdate(
    client: Socket,
    payload: { projectId: string; data: any },
  ) {
    client.broadcast.emit('project-updated', payload);

    this.server
      .to(`project_${payload.projectId}`)
      .emit('project-updated', payload);
  }

  @SubscribeMessage('join-project-room')
  handleJoinProjectRoom(client: Socket, projectId: string) {
    void client.join(`project_${projectId}`);
  }
}

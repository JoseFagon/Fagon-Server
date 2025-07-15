import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'https://fagon-client.vercel.app',
    credentials: true,
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server!: Server;

  // Evento padrão: Cliente conectado
  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
    this.server.emit('notification', { msg: 'Novo usuário online!' });
  }

  // Evento padrão: Cliente desconectado
  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  // Método personalizado: Enviar notificação para todos
  sendNotification(message: string) {
    this.server.emit('notification', { msg: message });
  }

  // Método personalizado: Enviar notificação para um usuário específico
  sendPrivateNotification(userId: string, message: string) {
    this.server.to(userId).emit('private-notification', { msg: message });
  }
}

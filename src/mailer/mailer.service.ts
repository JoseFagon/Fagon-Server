import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private readonly appUrl: string;

  constructor(
    private readonly mailer: NestMailerService,
    private readonly configService: ConfigService,
  ) {
    this.appUrl = this.configService.getOrThrow<string>('APP_URL');
  }

  private async sendEmail(
    to: string | string[],
    subject: string,
    template: string,
    context: Record<string, any> = {},
  ): Promise<SentMessageInfo> {
    try {
      await this.mailer.sendMail({
        to,
        subject,
        template,
        context: {
          ...context,
          appUrl: this.appUrl,
          currentYear: new Date().getFullYear(),
        },
      });

      this.logger.log(
        `Email sent to ${Array.isArray(to) ? to.join(', ') : to}`,
      );
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Failed to send email', error.stack);
        throw new Error(error.message);
      } else {
        this.logger.error(`Failed to send email: ${JSON.stringify(error)}`);
        throw new Error(String(error));
      }
    }
  }

  /**
   * Envia email de recuperação de senha
   * @param user Usuário que solicitou a recuperação
   * @param token Token de recuperação
   * @param expiresIn Tempo de expiração (ex: "30 minutos")
   */
  async sendRecoveryPassword(
    user: { email: string; name: string },
    token: string,
    expiresIn: string,
  ): Promise<SentMessageInfo> {
    const resetUrl = `${this.appUrl}/reset-password?token=${token}`;

    return this.sendEmail(
      user.email,
      'Recuperação de senha',
      'recovery-password',
      {
        name: user.name,
        resetUrl,
        expiresIn,
        supportEmail: this.configService.get<string>('SUPPORT_EMAIL'),
      },
    );
  }

  /**
   * Envia email de acesso concedido
   * @param user Usuário que recebeu acesso
   * @param resource Recurso acessado
   * @param grantedBy Quem concedeu o acesso
   */
  async sendAccessGranted(
    user: { email: string; name: string },
    resource: string,
    grantedBy: string,
  ): Promise<SentMessageInfo> {
    return this.sendEmail(user.email, 'Acesso concedido', 'access-granted', {
      name: user.name,
      resource,
      grantedBy,
      loginUrl: `${this.appUrl}/login`,
    });
  }

  /**
   * Envia email de notificação genérico
   * @param user Usuário destinatário
   * @param notification Objeto com título e mensagem
   * @param action Opcional: ação com texto e URL
   */
  async sendNotificationEmail(
    user: { email: string; name: string },
    notification: { title: string; message: string },
    action?: { text: string; url?: string },
  ): Promise<SentMessageInfo> {
    return this.sendEmail(
      user.email,
      notification.title,
      'notification-email',
      {
        name: user.name,
        notification,
        action,
      },
    );
  }
}

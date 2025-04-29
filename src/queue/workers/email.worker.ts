import { Injectable, Logger } from '@nestjs/common';
import { Processor, Process } from '@nestjs/bull';
import { MailerService } from '../../mailer/mailer.service';
import {
  AccessGrantedJob,
  EmailJobType,
  NotificationJob,
  RecoveryPasswordJob,
} from '../jobs/email.job';
import { Job } from 'bull';

@Injectable()
@Processor('email')
export class EmailWorker {
  private readonly logger = new Logger(EmailWorker.name);

  constructor(private readonly mailerService: MailerService) {}

  @Process(EmailJobType.RECOVERY_PASSWORD)
  async handleRecoveryPassword(job: Job<RecoveryPasswordJob>) {
    try {
      const { email, name, token, expiresIn } = job.data;
      await this.mailerService.sendRecoveryPassword(
        { email, name },
        token,
        String(expiresIn),
      );

      this.logger.log(`E-mail de recuperação enviado para: ${email}`);
    } catch (error) {
      this.logger.error(
        `Falha ao enviar e-mail de recuperação: ${(error as Error).message}`,
        (error as Error).stack,
      );
      throw error;
    }
  }

  @Process(EmailJobType.NOTIFICATION)
  async handleNotification(job: Job<NotificationJob>) {
    try {
      const { email, name, title, message, text } = job.data;
      await this.mailerService.sendNotificationEmail(
        { email, name },
        { title, message },
        { text },
      );
      this.logger.log(`Notificação enviada para: ${email}`);
    } catch (error) {
      this.logger.error(
        `Falha ao enviar notificação: ${(error as Error).message}`,
        (error as Error).stack,
      );
      throw error;
    }
  }

  @Process(EmailJobType.ACCESS_GRANTED)
  async handleAccessGranted(job: Job<AccessGrantedJob>) {
    try {
      const { email, name, resource, grantedBy } = job.data;
      await this.mailerService.sendAccessGranted(
        { email, name },
        resource,
        grantedBy,
      );
      this.logger.log(`Acesso concedido notificado para: ${email}`);
    } catch (error) {
      this.logger.error(
        `Falha ao notificar acesso concedido: ${(error as Error).message}`,
        (error as Error).stack,
      );
      throw error;
    }
  }
}

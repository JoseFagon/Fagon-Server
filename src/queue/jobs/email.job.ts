export enum EmailJobType {
  RECOVERY_PASSWORD = 'recovery-password',
  NOTIFICATION = 'notification',
  ACCESS_GRANTED = 'access-granted',
}

export interface RecoveryPasswordJob {
  email: string;
  name: string;
  token: string;
  expiresIn: number;
}

export interface NotificationJob {
  email: string;
  name: string;
  title: string;
  message: string;
  text: string;
  url: string;
}

export interface AccessGrantedJob {
  email: string;
  name: string;
  resource: string;
  grantedBy: string;
}

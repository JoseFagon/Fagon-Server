import { CameraType } from 'src/generated/@prisma/client';

export interface LoginResponse {
  access_token: string;
  user: {
    id: string;
    name: string;
    role: string;
    cameraType?: CameraType;
  };
}

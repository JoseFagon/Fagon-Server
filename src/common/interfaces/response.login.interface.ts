import { CameraType } from '@prisma/client';

export interface LoginResponse {
  access_token: string;
  projectId?: string;
  user: {
    id: string;
    name: string;
    role: string;
    cameraType: CameraType | null;
    status: boolean;
  };
}

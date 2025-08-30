import sharp from 'sharp';
import axios, { AxiosResponse } from 'axios';

export async function optimizeImageForPdf(imageUrl: string): Promise<string> {
  try {
    const response: AxiosResponse<ArrayBuffer> = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(new Uint8Array(response.data));

    const optimizedBuffer = await sharp(buffer)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toBuffer();

    return `data:image/jpeg;base64,${optimizedBuffer.toString('base64')}`;
  } catch (error) {
    console.error('Erro ao otimizar imagem:', error);
    return imageUrl;
  }
}

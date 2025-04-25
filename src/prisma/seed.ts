import * as argon2 from 'argon2';
import { PrismaClient } from 'src/generated/client';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('senha_forte_vistoriador');

  await prisma.user.createMany({
    data: [
      {
        name: 'Vistoriador Normal',
        email: 'vistoriador.normal@fake.io',
        password,
        role: 'vistoriador',
        status: true,
        cameraType: 'normal',
      },
      {
        name: 'Vistoriador 360',
        email: 'vistoriador.360@fake.io',
        password,
        role: 'vistoriador',
        status: true,
        cameraType: 'camera_360',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Vistoriadores criados!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

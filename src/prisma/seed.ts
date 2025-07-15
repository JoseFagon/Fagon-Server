import * as argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';

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

  await prisma.engineer.create({
    data: {
      name: 'Cinara Aprecida Batista Gonçalves',
      email: 'cinara.goncalves@fagon.com.br',
      phone: '11980157566',
      cpf: '09118249876',
      education: 'Arquiteta',
      registrationEntity: 'CAU-SP',
      registrationNumber: 'A49590-5',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

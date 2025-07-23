import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PrismaClient, ProjectType } from '@prisma/client';

const prisma = new PrismaClient();

@ValidatorConstraint({ async: true })
export class IsUniqueUpeByProjectTypeConstraint
  implements ValidatorConstraintInterface
{
  async validate(upeCode: number, args: ValidationArguments) {
    const { projectType } = args.object as { projectType: ProjectType };
    const existingProject = await prisma.project.findFirst({
      where: {
        upeCode,
        projectType,
      },
    });

    return !existingProject;
  }

  defaultMessage() {
    return `Já existe um projeto do mesmo tipo com o mesmo código de UPE`;
  }
}

export function IsUniqueUpeByProjectType(
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueUpeByProjectTypeConstraint,
    });
  };
}

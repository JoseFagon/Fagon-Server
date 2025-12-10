import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { ProjectType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ async: true })
export class IsUniqueUpeByProjectTypeConstraint
  implements ValidatorConstraintInterface
{
  constructor(private prisma: PrismaService) {}

  async validate(upeCode: number, args: ValidationArguments) {
    const { projectType } = args.object as { projectType: ProjectType };
    const existingProject = await this.prisma.project.findFirst({
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

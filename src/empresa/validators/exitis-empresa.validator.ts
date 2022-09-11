import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidatorConstraint,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from '../entities/empresa.entity';

@ValidatorConstraint({ name: 'EmpresaExists', async: true })
@Injectable()
export class EmpresaExistsRule implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async validate(value: number) {
    try {
      const query = await this.empresaRepository.findOne({
        where: { codigo: value },
      });
      if (query != null) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Empresa doesn't exist`;
  }
}

export function EmpresaExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'EmpresaExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: EmpresaExistsRule,
    });
  };
}

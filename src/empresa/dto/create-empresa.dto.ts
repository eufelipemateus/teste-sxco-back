import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  telefone: string;

  endereco: string;
}

import { IsEmail, IsNotEmpty } from 'class-validator';
import { EmpresaExists } from '../../empresa/validators/exitis-empresa.validator';

export class CreateColaboradorDto {
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  telefone: string;
  endereco: string;

  @IsNotEmpty()
  @EmpresaExists()
  empresa_id: number;
}

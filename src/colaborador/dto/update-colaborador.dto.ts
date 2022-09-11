import { CreateColaboradorDto } from './create-colaborador.dto';

export class UpdateColaboradorDto implements Partial<CreateColaboradorDto> {
  nome?: string;
  cpf?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  empresa_id?: number;
}

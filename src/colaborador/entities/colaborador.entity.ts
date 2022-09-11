import { Empresa } from '../../empresa/entities/empresa.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Colaborador {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;
  @Column()
  endereco: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.colaboradores)
  empresa: Empresa;
}

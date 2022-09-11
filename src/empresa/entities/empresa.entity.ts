import { Colaborador } from '../../colaborador/entities/colaborador.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ length: 14 })
  cnpj: string;

  @Column()
  nome: string;

  @Column()
  email: string;
  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @OneToMany(() => Colaborador, (colaborador) => colaborador.empresa)
  colaboradores: Colaborador[];
}

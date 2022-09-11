import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../empresa/entities/empresa.entity';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { ReturnColaboradorDto } from './dto/return-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,

    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}
  async create(_createColaboradorDto: CreateColaboradorDto) {
    const data = {
      cpf: _createColaboradorDto.cpf,
      nome: _createColaboradorDto.nome,
      email: _createColaboradorDto.email,
      telefone: _createColaboradorDto.telefone,
      endereco: _createColaboradorDto.endereco,
      empresa: await this.empresaRepository.findOne({
        where: {
          codigo: _createColaboradorDto.empresa_id,
        },
      }),
    };

    const colaboradorSave = this.colaboradorRepository.create(data);

    return await this.colaboradorRepository.save(colaboradorSave);
  }

  findAll() {
    return this.colaboradorRepository.find({
      select: { nome: true, codigo: true },
    });
  }

  async findOne(id: number) {
    const data = await this.colaboradorRepository.findOne({
      where: { codigo: id },
      relations: ['empresa'],
    });

    const result = new ReturnColaboradorDto();
    result.cpf = data.cpf;
    result.email = data.email;
    result.endereco = data.endereco;
    result.telefone = data.telefone;
    result.empresa_id = data.empresa.codigo;

    return result;
  }

  async update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    const data = {
      cpf: updateColaboradorDto.cpf,
      nome: updateColaboradorDto.nome,
      email: updateColaboradorDto.email,
      telefone: updateColaboradorDto.telefone,
      endereco: updateColaboradorDto.endereco,
      empresa: await this.empresaRepository.findOne({
        where: {
          codigo: updateColaboradorDto.empresa_id,
        },
      }),
    };

    try {
      await this.colaboradorRepository.update(
        {
          codigo: id,
        },
        data,
      );

      return 'Colaborador salvo com sucesso!';
    } catch (e) {
      return 'Não foi possivel atualizar colaborador.';
    }
  }

  async remove(id: number) {
    try {
      await this.colaboradorRepository.delete(id);

      return 'Colocaborador removido com sucesso';
    } catch (e) {
      return 'Não foi possivel remover o colaborador';
    }
  }
}

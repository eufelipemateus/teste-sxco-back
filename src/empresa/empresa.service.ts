import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetadataWithSuchNameAlreadyExistsError, Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async create(_createEmpresaDto: CreateEmpresaDto) {
    try {
      const data = this.empresaRepository.create(_createEmpresaDto);
      return await this.empresaRepository.save(data);
    } catch (e) {
      return 'Não foi poassivel adicionar empresa·';
    }
  }

  findAll() {
    return this.empresaRepository.find({
      select: {
        codigo: true,
        nome: true,
      },
    });
  }

  findOne(id: number) {
    return this.empresaRepository.findOne({ where: { codigo: id } });
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    try {
      await this.empresaRepository.update(
        {
          codigo: id,
        },
        updateEmpresaDto,
      );
      return 'Atualizado com Sucesso';
    } catch (e) {
      return 'Erro ao atualizar.';
    }
  }

  async remove(id: number) {
    try {
      await this.empresaRepository.delete(id);
      return 'Atualizado com sucesso';
    } catch (e) {
      return 'Removido com sucesso.';
    }
  }
}

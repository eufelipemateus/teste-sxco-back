import { Module } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { ColaboradorController } from './colaborador.controller';
import { Colaborador } from './entities/colaborador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from '../empresa/empresa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador]), EmpresaModule],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
})
export class ColaboradorModule {}

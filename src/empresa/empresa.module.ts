import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaExistsRule } from './validators/exitis-empresa.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController],
  providers: [EmpresaService, EmpresaExistsRule],
  exports: [TypeOrmModule, EmpresaExistsRule],
})
export class EmpresaModule {}

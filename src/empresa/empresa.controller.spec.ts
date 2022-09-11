import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database.module';
import { EmpresaController } from './empresa.controller';
import { EmpresaService } from './empresa.service';

describe('EmpresaController', () => {
  let controller: EmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [EmpresaController],
      providers: [ EmpresaService],
    }).compile();

    controller = module.get<EmpresaController>(EmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

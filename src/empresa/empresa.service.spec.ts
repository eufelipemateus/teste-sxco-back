import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaService } from './empresa.service';
import { empresaProviders } from './empresa.providers';
import { DatabaseModule } from '../database.module';

describe('EmpresaService', () => {
  let service: EmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [...empresaProviders, EmpresaService],
    }).compile();

    service = module.get<EmpresaService>(EmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

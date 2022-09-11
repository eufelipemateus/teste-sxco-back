import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database.module';
import { ColaboradorService } from './colaborador.service';

describe('ColaboradorService', () => {
  let service: ColaboradorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [ColaboradorService],
    }).compile();

    service = module.get<ColaboradorService>(ColaboradorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

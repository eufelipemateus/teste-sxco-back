import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database.module';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';

describe('ColaboradorController', () => {
  let controller: ColaboradorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [ColaboradorController],
      providers: [ColaboradorService],
    }).compile();

    controller = module.get<ColaboradorController>(ColaboradorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

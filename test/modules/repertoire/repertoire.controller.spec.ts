import { Test, TestingModule } from '@nestjs/testing';
import { RepertoireController } from '../../../src/modules/repertoire/repertoire.controller';

describe('Repertoire Controller', () => {
  let controller: RepertoireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepertoireController],
    }).compile();

    controller = module.get<RepertoireController>(RepertoireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ShowController } from '../../../src/modules/show/show.controller';

describe('Show Controller', () => {
  let controller: ShowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowController],
    }).compile();

    controller = module.get<ShowController>(ShowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SongController } from '../../../src/modules/song/song.controller';

describe('Song Controller', () => {
  let controller: SongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongController],
    }).compile();

    controller = module.get<SongController>(SongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

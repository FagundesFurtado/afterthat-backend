import { Test, TestingModule } from '@nestjs/testing';
import { SongService } from '../../../src/modules/song/song.service';

describe('SongService', () => {
  let service: SongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongService],
    }).compile();

    service = module.get<SongService>(SongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

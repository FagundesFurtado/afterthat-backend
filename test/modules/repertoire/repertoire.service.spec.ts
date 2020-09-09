import { Test, TestingModule } from '@nestjs/testing';
import { RepertoireService } from '../../../src/modules/repertoire/repertoire.service';

describe('RepertoireService', () => {
  let service: RepertoireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepertoireService],
    }).compile();

    service = module.get<RepertoireService>(RepertoireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

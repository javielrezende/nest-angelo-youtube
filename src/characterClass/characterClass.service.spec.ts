import { Test, TestingModule } from '@nestjs/testing';
import { CharacterClassService } from './characterClass.service';

describe('CharacterClassService', () => {
  let service: CharacterClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterClassService],
    }).compile();

    service = module.get<CharacterClassService>(CharacterClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

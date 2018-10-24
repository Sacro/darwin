import { Test, TestingModule } from '@nestjs/testing';
import { StompService } from './stomp.service';

describe('StompService', () => {
  let service: StompService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StompService],
    }).compile();
    service = module.get<StompService>(StompService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

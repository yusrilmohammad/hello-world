import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be an array', () => {
    expect(service.findAll()).toStrictEqual([]);
  });

  it('should be ok', () => {
    const cat: Cat = {
      name: 'cat',
      age: 1,
      breed: 'std',
    };
    try {
      service.create(cat);
      expect(true).toBeTruthy();
    } catch (error) {
      expect(error).not.toBeDefined();
    }
  });
});

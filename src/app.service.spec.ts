import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('UsersService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('Load app module', () => {
    new AppModule();
    expect(true).toBeTruthy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('hello world', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
});

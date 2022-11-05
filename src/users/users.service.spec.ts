import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';
import * as dotenv from 'dotenv';

dotenv.config();

describe('UsersService', () => {
  let service: UsersService;
  const userMock = {
    username: 'john',
    password: process.env.DB_PASSWORD,
    email: 'john@gmail.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: () => userMock,
            save: async () => userMock,
            findOneBy: async () => userMock,
            find: async () => [userMock],
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('createUser', async () => {
    const user: CreateUserDto = {
      username: 'john',
      password: process.env.DB_PASSWORD,
      email: 'john@gmail.com',
    };
    const res = await service.createUser(user);
    expect(res).toStrictEqual({
      username: 'john',
      password: process.env.DB_PASSWORD,
      email: 'john@gmail.com',
    });
  });

  it('findUser', async () => {
    const users = await service.getUsers();
    expect(users).toStrictEqual([
      {
        username: 'john',
        password: process.env.DB_PASSWORD,
        email: 'john@gmail.com',
      },
    ]);
  });

  it('findUsersById', async () => {
    const user = await service.findUsersById(1);
    expect(user).toStrictEqual({
      username: 'john',
      password: process.env.DB_PASSWORD,
      email: 'john@gmail.com',
    });
  });
});

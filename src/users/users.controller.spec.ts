import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const userMock = {
    username: 'john',
    password: '!S3cret',
    email: 'john@gmail.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
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

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create', async () => {
    const res = await controller.createUsers(userMock);
    expect(res).toStrictEqual({
      username: 'john',
      password: '!S3cret',
      email: 'john@gmail.com',
    });
  });

  it('getUsers', async () => {
    const res = await controller.getUsers();
    expect(res).toStrictEqual([
      {
        username: 'john',
        password: '!S3cret',
        email: 'john@gmail.com',
      },
    ]);
  });

  it('getUser', async () => {
    const res = await controller.findUsersById(1);
    expect(res).toStrictEqual({
      username: 'john',
      password: '!S3cret',
      email: 'john@gmail.com',
    });
  });
});

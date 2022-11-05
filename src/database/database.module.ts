import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { dataSourceOptions } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
  ],
})
export class DBModule {}

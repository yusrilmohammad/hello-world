import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSourceOptions } from './database.config';

// used for run migration
export const dataSource = new DataSource({
  ...dataSourceOptions,
  migrationsRun: true,
  // module entity autoload
  entities: [`${__dirname}'/../**/*.entity.ts`],
  // is used to execute typeorm-cli
  // check package.json script
  migrations: ['src/database/migrations/**/*.ts'],
} as DataSourceOptions);

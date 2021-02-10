import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'password',
  database: 'taskmanagement',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

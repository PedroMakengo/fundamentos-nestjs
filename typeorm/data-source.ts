import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

// Conexão com o Typeorm
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '2024Makengo',
  database: 'api',
  migrations: [`${__dirname}/migrations/**/*.ts`],
});

export default dataSource;

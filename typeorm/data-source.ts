const dotenv = require('dotenv');
const { DataSource } = require('typeorm');

dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env',
});

// Conexão com o Typeorm
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '2024Makengo',
  database: 'api_test',
  migrations: [`${__dirname}/migrations/**/*.ts`],
});

module.exports = dataSource;

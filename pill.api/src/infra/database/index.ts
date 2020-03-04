import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import path from 'path';

export const database = ({ config: { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } }) => {
  const sequelize = new Sequelize({
    dialect: DB_DIALECT as Dialect,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    models: [path.resolve(__dirname, '..', 'models')],
  });

  (sequelize as any).connect = () => sequelize // eslint-disable-line @typescript-eslint/no-explicit-any
    .authenticate()
    .then(() => console.log('Database was connected successfully'));

  return sequelize;
};
export interface IDatabase {
  models: object;
  sequelize: object;
  Sequelize: object;
  authenticate: () => void;
}

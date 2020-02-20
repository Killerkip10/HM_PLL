'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {
  models: {},
};

module.exports = () => {
  const sequelize = new Sequelize('HM_PLL', 'root', '12345678', { host: 'localhost', dialect: 'mysql' });

  fs
    .readdirSync(path.join(__dirname, 'models'))
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = sequelize['import'](path.join(__dirname, 'models', file));
      db.models[model.name] = model;
    });

  Object.keys(db.models).forEach(modelName => {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  });

  db.sequelize = sequelize;
  db.connect = () => sequelize.authenticate()
    .then(() => console.log('Database connection has been established successfully'));
  db.Sequelize = Sequelize;

  return db;
};

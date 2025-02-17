'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('TypeMedicines', [
      {
        name: 'Таблетки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Драже',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Капли для приема внутрь',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Раствор',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

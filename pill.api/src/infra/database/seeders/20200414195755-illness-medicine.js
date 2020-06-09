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
    return queryInterface.bulkInsert('IllnessMedicines', [
      {
        illnessId: 1,
        medicineId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        medicineId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        medicineId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        medicineId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        medicineId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        medicineId: 5,
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

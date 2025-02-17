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
    return queryInterface.bulkInsert('MedicineGroups', [
      {
        medicineId: 1,
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        medicineId: 2,
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        medicineId: 4,
        groupId: 1,
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

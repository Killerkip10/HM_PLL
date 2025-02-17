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
    return queryInterface.bulkInsert('MedicineConflicts', [
      {
        medicineId: 1,
        conflictMedicineId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        medicineId: 2,
        conflictMedicineId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        medicineId: 4,
        conflictMedicineId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        medicineId: 2,
        conflictMedicineId: 3,
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

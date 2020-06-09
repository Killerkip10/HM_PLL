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
    return queryInterface.bulkInsert('IllnessSymptoms', [
      {
        illnessId: 1,
        symptomId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        symptomId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        symptomId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        symptomId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        symptomId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        symptomId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        symptomId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        symptomId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        symptomId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        symptomId: 10,
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

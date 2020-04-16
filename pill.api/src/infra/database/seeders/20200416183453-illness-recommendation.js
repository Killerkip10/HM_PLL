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
    return queryInterface.bulkInsert('IllnessRecommendations', [
      {
        illnessId: 1,
        recommendationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 1,
        recommendationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        recommendationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        illnessId: 2,
        recommendationId: 2,
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

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
    return queryInterface.bulkInsert('Symptoms', [
      {
        name: 'Cough',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Temperature',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chills',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fever',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dry cough',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fatigue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sputum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Labored breathing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sore throat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Headache',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nausea and vomiting',
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

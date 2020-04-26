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
    return queryInterface.bulkInsert('Users', [
    	{
				firstName: 'John',
				lastName: 'Doe',
				email: 'example@example.com',
				password: '1234',
				role: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				firstName: 'Vlad',
				lastName: 'Pinchuk',
				email: '1@gmail.com',
				password: '1234',
				role: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				firstName: 'Artem',
				lastName: 'Pinchuk',
				email: '2@gmail.com',
				password: '1111',
				role: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
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

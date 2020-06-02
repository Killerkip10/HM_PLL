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
		return queryInterface.bulkInsert('IllnessReviews', [
			// {
			// 	illnessId: 1,
			// 	review: 'Review-1',
			// 	descriptionRating: 5,
			// 	symptomsRating: 5,
			// 	recommendationsRating: 5,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date(),
			// },
			// {
			// 	illnessId: 1,
			// 	review: 'Review-2',
			// 	descriptionRating: 4,
			// 	symptomsRating: 5,
			// 	recommendationsRating: 3,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date(),
			// },
			// {
			// 	illnessId: 2,
			// 	review: 'Review-3',
			// 	descriptionRating: 2,
			// 	symptomsRating: 3,
			// 	recommendationsRating: 1,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date(),
			// },
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

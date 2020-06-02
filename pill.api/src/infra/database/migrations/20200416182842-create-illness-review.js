'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('IllnessReviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			illnessId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			review: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			descriptionRating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			symptomsRating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			recommendationsRating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable('IllnessReviews');
	},
};

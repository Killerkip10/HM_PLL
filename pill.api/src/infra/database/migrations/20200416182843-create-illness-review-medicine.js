'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('IllnessReviewMedicines', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			illnessReviewId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			medicineId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			rating: {
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
		await queryInterface.dropTable('IllnessReviewMedicines');
	},
};

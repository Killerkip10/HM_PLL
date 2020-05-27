'use strict';
module.exports = {
  up: async (queryInterface) => {
    //
    // ############################### Medicines ###############################
    await queryInterface.addConstraint('Medicines', ['routeId'],{
      type: 'FOREIGN KEY',
      name: 'Medicines_1',
      references: {
        table: 'Routes',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Medicines', ['typeMedicineId'],{
      type: 'FOREIGN KEY',
      name: 'Medicines_2',
      references: {
        table: 'TypeMedicines',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('Medicines', ['productionMedicineMethodId'],{
      type: 'FOREIGN KEY',
      name: 'Medicines_3',
      references: {
        table: 'ProductionMedicineMethods',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });
    //
    // ############################### MedicineGroups ###############################
    await queryInterface.addConstraint('MedicineGroups', ['medicineId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineGroups_1',
      references: {
        table: 'Medicines',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('MedicineGroups', ['groupId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineGroups_2',
      references: {
        table: 'Groups',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });
    //
    // ############################### MedicineConflicts ###############################
    await queryInterface.addConstraint('MedicineConflicts', ['medicineId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineConflicts_1',
      references: {
        table: 'Medicines',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('MedicineConflicts', ['conflictMedicineId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineConflicts_2',
      references: {
        table: 'Medicines',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });
    //
    // ############################### MedicineGroupConflicts ###############################
    await queryInterface.addConstraint('MedicineGroupConflicts', ['medicineId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineGroupConflicts_1',
      references: {
        table: 'Medicines',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('MedicineGroupConflicts', ['groupId'],{
      type: 'FOREIGN KEY',
      name: 'MedicineGroupConflicts_2',
      references: {
        table: 'Groups',
        field: 'id',
      },
      onDelete: 'restrict',
      onUpdate: 'cascade',
    });
    //
    // ############################### IllnessSymptoms ###############################
    await queryInterface.addConstraint('IllnessSymptoms', ['illnessId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessSymptoms_1',
      references: {
        table: 'Illnesses',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('IllnessSymptoms', ['symptomId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessSymptoms_2',
      references: {
        table: 'Symptoms',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    //
    // ############################### IllnessMedicines ###############################
    await queryInterface.addConstraint('IllnessMedicines', ['illnessId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessMedicines_1',
      references: {
        table: 'Illnesses',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('IllnessMedicines', ['medicineId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessMedicines_2',
      references: {
        table: 'Medicines',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'cascade',
    });
    //
    // ############################### IllnessRecommendations ###############################
    await queryInterface.addConstraint('IllnessRecommendations', ['illnessId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessRecommendations_1',
      references: {
        table: 'Illnesses',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('IllnessRecommendations', ['recommendationId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessRecommendations_2',
      references: {
        table: 'Recommendations',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint('Medicines', 'Medicines_1');
    await queryInterface.removeConstraint('Medicines', 'Medicines_2');
    await queryInterface.removeConstraint('Medicines', 'Medicines_3');

    await queryInterface.removeConstraint('IllnessSymptoms', 'IllnessSymptoms_1');
    await queryInterface.removeConstraint('IllnessSymptoms', 'IllnessSymptoms_2');

    await queryInterface.removeConstraint('IllnessMedicines', 'IllnessMedicines_1');
    await queryInterface.removeConstraint('IllnessMedicines', 'IllnessMedicines_2');

    await queryInterface.removeConstraint('IllnessRecommendations', 'IllnessRecommendations_1');
    await queryInterface.removeConstraint('IllnessRecommendations', 'IllnessRecommendations_2');

    await queryInterface.removeConstraint('MedicineGroups', 'MedicineGroups_1');
    await queryInterface.removeConstraint('MedicineGroups', 'MedicineGroups_2');

    await queryInterface.removeConstraint('MedicineConflicts', 'MedicineConflicts_1');
    await queryInterface.removeConstraint('MedicineConflicts', 'MedicineConflicts_2');

    await queryInterface.removeConstraint('MedicineGroupConflicts', 'MedicineGroupConflicts_1');
    await queryInterface.removeConstraint('MedicineGroupConflicts', 'MedicineGroupConflicts_2');
  },
};

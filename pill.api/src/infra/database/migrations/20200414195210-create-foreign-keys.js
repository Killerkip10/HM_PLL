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
    // ############################### IllnessSymptoms ###############################
    await queryInterface.addConstraint('IllnessSymptoms', ['illnessId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessSymptoms_1',
      references: {
        table: 'Illnesses',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('IllnessSymptoms', ['symptomId'],{
      type: 'FOREIGN KEY',
      name: 'IllnessSymptoms_2',
      references: {
        table: 'Symptoms',
        field: 'id',
      },
      onDelete: 'no action',
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
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint('Medicines', 'Medicines_1');
    await queryInterface.removeConstraint('Medicines', 'Medicines_2');
    await queryInterface.removeConstraint('Medicines', 'Medicines_3');

    await queryInterface.removeConstraint('IllnessSymptoms', 'IllnessSymptoms_1');
    await queryInterface.removeConstraint('IllnessSymptoms', 'IllnessSymptoms_2');

    await queryInterface.removeConstraint('IllnessMedicines', 'IllnessMedicines_1');
    await queryInterface.removeConstraint('IllnessMedicines', 'IllnessMedicines_2');
  },
};
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
    // ############################### Illnesses ###############################
    // await queryInterface.addConstraint('Illnesses', ['symptom'],{
    //   type: 'FOREIGN KEY',
    //   name: 'Medicines_1',
    //   references: {
    //     table: 'Routes',
    //     field: 'id',
    //   },
    //   onDelete: 'restrict',
    //   onUpdate: 'cascade',
    // });
  },
  down: async (queryInterface) => {
    await queryInterface.removeConstraint('Medicines', 'Medicines_1');
    await queryInterface.removeConstraint('Medicines', 'Medicines_2');
    await queryInterface.removeConstraint('Medicines', 'Medicines_3');
  },
};
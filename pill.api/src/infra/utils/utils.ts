import { MedicineConflict } from '../models/MedicineConflict';
import { MedicineGroup } from '../models/MedicineGroup';
import { MedicineGroupConflict } from '../models/MedicineGroupConflict';
import { IConflict } from '../interfaces';

export const getMedicineConflicts = (medicineConflicts: MedicineConflict[]) => medicineConflicts.reduce((prev, curr) => {
  const conflict = prev.find(c => c.id === curr.medicineId);

  if (conflict) {
    conflict.conflicts.push(curr.conflictMedicineId);

    return prev;
  }

  const existConflict = prev.find(c => c.id === curr.conflictMedicineId);

  if (!(existConflict && existConflict.conflicts.includes(curr.medicineId))) {
    prev.push({ id: curr.medicineId, conflicts: [curr.conflictMedicineId] });
  }

  return prev;
}, [] as IConflict[]);

export const getGroupConflicts = (
  medicineGroups: MedicineGroup[],
  medicineGroupConflicts: MedicineGroupConflict[],
  medicineConflicts: IConflict[],
) => medicineGroupConflicts.reduce((prev, curr) => {
  const conflicts = medicineGroups
    .filter(g => g.groupId === curr.groupId)
    .map(g => g.medicineId)
    .filter((medicineId) => {
      const existMedicineConflict = medicineConflicts.find(c => c.id === curr.medicineId);

      if (existMedicineConflict && existMedicineConflict.conflicts.some(id => id === medicineId)) {
        return false;
      }

      const existConflict = prev.find(c => c.id === medicineId);

      if (existConflict) {
        return !existConflict.conflicts.some(id => id === curr.medicineId);
      } else {
        return true;
      }
    });

  if (conflicts.length) {
    prev.push({ id: curr.medicineId, conflicts });
  }

  return prev;
}, [] as IConflict[]);
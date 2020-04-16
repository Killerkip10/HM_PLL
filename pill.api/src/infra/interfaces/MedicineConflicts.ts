export interface IConflict {
  id: number;
  conflicts: number[];
}

export interface IMedicineConflicts {
  medicineConflicts: IConflict[];
  groupConflicts: IConflict[];
}
import {
  Model,
  Column,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Medicine } from './Medicine';

@Table
export class MedicineConflict extends Model<MedicineConflict> {
  @ForeignKey(() => Medicine)
  @Column
  public medicineId: number;

  @ForeignKey(() => Medicine)
  @Column
  public conflictMedicineId: number;
}
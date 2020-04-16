import {
  Model,
  Column,
  Table,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';

import { Medicine } from './Medicine';

@Table
export class MedicineConflict extends Model<MedicineConflict> {
  @PrimaryKey
  @ForeignKey(() => Medicine)
  @Column
  public medicineId: number;

  @ForeignKey(() => Medicine)
  @Column
  public conflictMedicineId: number;
}

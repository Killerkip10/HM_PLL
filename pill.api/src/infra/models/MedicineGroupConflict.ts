import {
  Model,
  Column,
  Table,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';

import { Medicine } from './Medicine';
import { Group } from './Group';

@Table
export class MedicineGroupConflict extends Model<MedicineGroupConflict> {
  @PrimaryKey
  @ForeignKey(() => Medicine)
  @Column
  public medicineId: number;

  @ForeignKey(() => Group)
  @Column
  public groupId: number;
}
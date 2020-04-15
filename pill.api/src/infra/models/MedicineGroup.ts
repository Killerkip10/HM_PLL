import {
  Model,
  Column,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Medicine } from './Medicine';
import { Group } from './Group';

@Table
export class MedicineGroup extends Model<MedicineGroup> {
  @ForeignKey(() => Medicine)
  @Column
  public medicineId: number;

  @ForeignKey(() => Group)
  @Column
  public groupId: number;
}
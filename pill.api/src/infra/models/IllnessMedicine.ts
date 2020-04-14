import {
  Model,
  Column,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Illness } from './Illness';
import { Medicine } from './Medicine';

@Table
export class IllnessMedicine extends Model<IllnessMedicine> {
  @ForeignKey(() => Illness)
  @Column
  public illnessId: number;

  @ForeignKey(() => Medicine)
  @Column
  public medicineId: number;
}
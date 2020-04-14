import {
  Model,
  Column,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Illness } from './Illness';
import { Symptom } from './Symptom';

@Table
export class IllnessSymptom extends Model<IllnessSymptom> {
  @ForeignKey(() => Illness)
  @Column
  public illnessId: number;

  @ForeignKey(() => Symptom)
  @Column
  public symptomId: number;
}
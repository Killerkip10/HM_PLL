import {
  Model,
  Column,
  Table,
  ForeignKey,
} from 'sequelize-typescript';

import { Illness } from './Illness';
import { Recommendation } from './Recommendation';

@Table
export class IllnessRecommendation extends Model<IllnessRecommendation> {
  @ForeignKey(() => Illness)
  @Column
  public illnessId: number;

  @ForeignKey(() => Recommendation)
  @Column
  public recommendationId: number;
}
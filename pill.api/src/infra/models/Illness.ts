import {
  Model,
  Column,
  Table,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  NotEmpty,
  AutoIncrement,
  Unique,
  BelongsToMany,
} from 'sequelize-typescript';

import { IIllness } from '../../domain';
import { IllnessSymptom } from './IllnessSymptom';
import { IllnessMedicine } from './IllnessMedicine';
import { IllnessRecommendation } from './IllnessRecommendation';
import { Symptom } from './Symptom';
import { Medicine } from './Medicine';
import { Recommendation } from './Recommendation';

@Table
export class Illness extends Model<Illness> implements IIllness {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  public name: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public description: string;

  @BelongsToMany(() => Symptom, () => IllnessSymptom)
  public symptoms: Symptom[];

  @BelongsToMany(() => Medicine, () => IllnessMedicine)
  public medicines: Medicine[];

  @BelongsToMany(() => Recommendation, () => IllnessRecommendation)
  public recommendations: Recommendation[];

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

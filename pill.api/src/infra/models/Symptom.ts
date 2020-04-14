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

import { ISymptom } from '../../domain';
import { Illness } from './Illness';
import { IllnessSymptom } from './IllnessSymptom';

@Table
export class Symptom extends Model<Symptom> implements ISymptom {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  public name: string;

  @BelongsToMany(() => Illness,() => IllnessSymptom)
  public illnesses;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

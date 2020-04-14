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
} from 'sequelize-typescript';

import { ISymptom } from '../../domain';

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

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

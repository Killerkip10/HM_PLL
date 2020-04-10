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

import { IRoute } from '../../domain';

@Table
export class Route extends Model<Route> implements IRoute {
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

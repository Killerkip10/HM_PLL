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
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

import { Route } from './Route';
import { IMedicine } from '../../domain';

@Table
export class Medicine extends Model<Medicine> implements IMedicine {
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
  @Column({ type: DataType.TEXT })
  public description: string;

  @AllowNull(false)
  @NotEmpty
  @Column({ type: DataType.TEXT })
  public wayUse: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public typeId: number;

  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Route)
  @Column
  public routeId: number;

  @BelongsTo(() => Route)
  public route: Route;

  @AllowNull(false)
  @NotEmpty
  @Column
  public productionMethodId: number;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

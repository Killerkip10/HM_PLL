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
  HasMany,
} from 'sequelize-typescript';

import { IMedicine } from '../../domain';
import { Route } from './Route';
import { TypeMedicine } from './TypeMedicine';
import { ProductionMedicineMethod } from './ProductionMedicineMethod';
import { MedicineConflict } from './MedicineConflict';

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
  @ForeignKey(() => TypeMedicine)
  @Column
  public typeMedicineId: number;

  @BelongsTo(() => TypeMedicine)
  public typeMedicine: TypeMedicine;


  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => Route)
  @Column
  public routeId: number;

  @BelongsTo(() => Route)
  public route: Route;


  @AllowNull(false)
  @NotEmpty
  @ForeignKey(() => ProductionMedicineMethod)
  @Column
  public productionMedicineMethodId: number;

  @BelongsTo(() => ProductionMedicineMethod)
  public productionMedicineMethod: ProductionMedicineMethod;


  // @HasMany(() => MedicineConflict)
  // public conflicts


  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

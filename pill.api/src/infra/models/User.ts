import {
  Model,
  Column,
  Table,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  NotEmpty,
  IsEmail,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  public id: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  public firstName: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public lastName: string;

  @AllowNull(false)
  @NotEmpty
  @IsEmail
  @Column
  public email: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public password: string;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

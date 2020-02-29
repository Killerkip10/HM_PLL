import { Model, Column, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  public firstName: string;

  @Column
  public lastName: string;

  @Column
  public email: string;

  @Column
  public password: string;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}
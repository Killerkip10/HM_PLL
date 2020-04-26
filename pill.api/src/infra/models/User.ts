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
  AutoIncrement,
	Is,
} from 'sequelize-typescript';

import { IUser } from '../../domain';
import { ROLE } from '../constants';

@Table
export class User extends Model<User> implements IUser {
  @PrimaryKey
  @AutoIncrement
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

  @AllowNull(false)
	@NotEmpty
	@Is('Role', (value) => {
		if (!Object.values(ROLE).includes(value)) {
			throw new Error(`${value} is not a existed role`);
		}
	})
	@Column
	public role: number;

  @CreatedAt
  @Column
  public createdAt: Date;

  @UpdatedAt
  @Column
  public updatedAt: Date;
}

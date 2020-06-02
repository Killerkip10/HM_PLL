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
	DataType,
	BelongsTo,
} from 'sequelize-typescript';

import { IllnessReview } from './IllnessReview';
import { Medicine } from './Medicine';
import { IIllnessReviewMedicine } from '../../domain';

@Table
export class IllnessReviewMedicine extends Model<IllnessReviewMedicine> implements IIllnessReviewMedicine {
	@PrimaryKey
	@AutoIncrement
	@Column
	public id: number;

	@AllowNull(false)
	@NotEmpty
	@ForeignKey(() => IllnessReview)
	@Column
	public illnessReviewId: number;

	@AllowNull(false)
	@NotEmpty
	@ForeignKey(() => Medicine)
	@Column
	public medicineId: number;

	@BelongsTo(() => Medicine)
	public medicine: Medicine;

	@AllowNull(false)
	@Column
	public rating: number;

	@CreatedAt
	@Column
	public createdAt: Date;

	@UpdatedAt
	@Column
	public updatedAt: Date;
}

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
	ForeignKey,
	DataType,
	HasMany,
} from 'sequelize-typescript';

import { Illness } from './Illness';
import { IllnessReviewMedicine } from './IllnessReviewMedicine';
import { IIllnessReview } from '../../domain';

@Table
export class IllnessReview extends Model<IllnessReview> implements IIllnessReview {
	@PrimaryKey
	@AutoIncrement
	@Column
	public id: number;

	@AllowNull(false)
	@NotEmpty
	@ForeignKey(() => Illness)
	@Column
	public illnessId: number;

	@AllowNull(false)
	@Column({ type: DataType.TEXT })
	public review: string;

	@AllowNull(false)
	@Column
	public descriptionRating: number;

	@AllowNull(false)
	@Column
	public symptomsRating: number;

	@AllowNull(false)
	@Column
	public recommendationsRating: number;

	@HasMany(() => IllnessReviewMedicine)
	public medicines: IllnessReviewMedicine[];

	@CreatedAt
	@Column
	public createdAt: Date;

	@UpdatedAt
	@Column
	public updatedAt: Date;
}

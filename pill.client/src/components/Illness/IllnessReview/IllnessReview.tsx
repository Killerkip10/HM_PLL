import React, { memo, useMemo } from 'react';
import { flowRight } from 'lodash';
import { LineChart, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core';

import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';
import { Rating } from 'components/common/Rating';
import { Select } from 'components/common/Select';

const styles = () => ({
	graphicsContainer: {
		padding: '10px 30px 20px 0',
	},
	medicines: {
		marginLeft: '65px',
		width: '200px',
	},
	expandedSummary: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	expandedDetails: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	rating: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& > div:first-child': {
			marginRight: '10px',
		}
	}
});

export const IllnessReviewComponent = ({ illnessName, medicines, illnessGraphicReviews, illnessReviews, illnessGraphicMedicines, onMedicineChange, classes }) => {
	const renderIllnessReviews = useMemo(() => illnessReviews.map(({ id, review, createdAt, descriptionRating, recommendationsRating, symptomsRating, medicines }) => (
		<ExpansionPanel key={id}>
			<ExpansionPanelSummary>
				<div className={classes.expandedSummary}>
					<div>{review}</div>
					<div>{createdAt}</div>
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<div className={classes.expandedDetails}>
					<div>
						<div className={classes.rating}>
							<div>Description</div>
							<Rating value={descriptionRating} readOnly />
						</div>
						<div className={classes.rating}>
							<div>Recommendations</div>
							<Rating value={recommendationsRating} readOnly />
						</div>
						<div className={classes.rating}>
							<div>Symptoms</div>
							<Rating value={symptomsRating} readOnly />
						</div>
					</div>
					<div>
						{medicines.map(({ id, rating, medicine: { name } }) => (
							<div key={id} className={classes.rating}>
								<div>{name}</div>
								<Rating value={rating} readOnly />
							</div>
						))}
					</div>
				</div>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)), [illnessReviews]);

	return (
		<div>
			<Toolbar>
				<div>Illness review</div>
				<div>{illnessName}</div>
			</Toolbar>

			<Page>
				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={illnessGraphicReviews}>
						<CartesianGrid />
						<XAxis dataKey="date"/>
						<YAxis/>
						<Tooltip/>
						<Line type='monotone' dataKey="rating" stroke='#82ca9d' fill='#82ca9d' />
						<Brush />
					</LineChart>
				</ResponsiveContainer>

				<Select className={classes.medicines} data={medicines} onChange={onMedicineChange} />

				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={illnessGraphicMedicines}>
						<CartesianGrid />
						<XAxis dataKey="date"/>
						<YAxis/>
						<Tooltip/>
						<Line type='monotone' dataKey="rating" stroke='#82ca9d' fill='#82ca9d' />
						<Brush />
					</LineChart>
				</ResponsiveContainer>
			</Page>

			<Page padding={false}>
				{renderIllnessReviews}
			</Page>
		</div>
	);
};

export const IllnessReview = flowRight(
	withStyles(styles),
	memo,
)(IllnessReviewComponent);

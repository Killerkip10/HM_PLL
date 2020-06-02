import React, { memo } from 'react';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';

import { Button } from 'components/common/Button';

import { IllnessManageTable } from './IllnessManageTable';

const styles = () => ({
	illnessManage: {
		padding: '0 20px',
	},
});

export const IllnessManageComponent = ({ illnesses, onCreate, onEdit, onDelete, onReview, classes }) => (
	<div className={classes.illnessManage}>
		<div>
			<h3>Illness manage</h3>
			<Button onClick={onCreate}>Create</Button>
		</div>
		<IllnessManageTable illnesses={illnesses} onEdit={onEdit} onDelete={onDelete} onReview={onReview} />
	</div>
);

export const IllnessManage = flowRight(
	withStyles(styles),
	memo,
)(IllnessManageComponent);

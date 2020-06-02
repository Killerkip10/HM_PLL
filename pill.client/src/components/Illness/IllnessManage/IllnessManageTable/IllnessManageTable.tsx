import React, { memo, useCallback } from 'react';
import { flowRight } from 'lodash';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const ACTION = {
	EDIT: 1,
	DELETE: 2,
	REVIEW: 3,
};

const styles = () => ({
	actionsIcon: {
		cursor: 'pointer',
		'&:hover': {
			color: '#0000009e',
		},
	},
	editIcon: {
		marginRight: '10px',
	}
});

export const IllnessManageTableComponent = ({ illnesses, classes, onEdit, onDelete, onReview }) => {
	const handleEditClick = useCallback(({ target: { dataset: { id, action } } }) => {
		switch(Number(action)) {
			case ACTION.EDIT:
				return onEdit(Number(id));
			case ACTION.DELETE:
				return onDelete(Number(id));
			case ACTION.REVIEW:
				return onReview(Number(id));
		}
	}, [onEdit, onDelete, onReview]);

	return (
		<TableContainer component={Paper} onClick={handleEditClick}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">Id</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="right">Created at</TableCell>
						<TableCell align="right">Updated at</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{illnesses.map(({ id, name, createdAt, updatedAt }) => (
						<TableRow key={id}>
							<TableCell align="left">{id}</TableCell>
							<TableCell align="left">{name}</TableCell>
							<TableCell align="right">{createdAt}</TableCell>
							<TableCell align="right">{updatedAt}</TableCell>
							<TableCell align="right">
								<Icon className={`${classes.actionsIcon} ${classes.editIcon}`} data-id={id} data-action={ACTION.REVIEW}>analytics</Icon>
								<Icon className={`${classes.actionsIcon} ${classes.editIcon}`} data-id={id} data-action={ACTION.EDIT}>edit</Icon>
								<Icon className={classes.actionsIcon} data-id={id} data-action={ACTION.DELETE}>delete</Icon>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export const IllnessManageTable = flowRight(
	withStyles(styles),
	memo,
)(IllnessManageTableComponent);

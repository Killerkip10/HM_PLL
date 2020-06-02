import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { ROUTE } from 'configs';

import { IllnessManage } from './IllnessManage';
import { getIllnessesAction, deleteIllnessAction } from './epicActions';
import { getNormalizedIllnessesSelector } from './selectors';

export const IllnessManageContainerComponent = ({ illnesses, history, getIllnesses, deleteIllness }) => {
	useEffect(() => {
		getIllnesses();
	}, []);

	const handleEdit = useCallback(id => history.push(`${ROUTE.ILLNESS_EDIT}/${id}`), [history]);

	const handleCreate = useCallback(() => history.push(ROUTE.ILLNESS_CREATE), [history]);

	const handleReview = useCallback(id => history.push(`${ROUTE.ILLNESS_REVIEW}/${id}`), [history]);

	return <IllnessManage illnesses={illnesses} onCreate={handleCreate} onEdit={handleEdit} onDelete={deleteIllness} onReview={handleReview} />
};

const mapStateToProps = state => ({
	illnesses: getNormalizedIllnessesSelector(state),
});

const mapDispatchToProps = ({
	getIllnesses: getIllnessesAction,
	deleteIllness: deleteIllnessAction,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessManageContainer = connector(IllnessManageContainerComponent);

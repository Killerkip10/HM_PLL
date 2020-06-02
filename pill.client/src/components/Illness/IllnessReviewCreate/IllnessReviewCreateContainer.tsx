import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { FORM_NAME } from 'components/common/forms/IllnessReviewCreateForm';

import { IllnessReviewCreate } from './IllnessReviewCreate';
import { createReviewAction, getMedicinesAction } from './epicActions';
import { getInitialIllnessReviewSelector, getMedicinesSelector } from './selectors';

export const IllnessReviewCreateContainerComponent = ({ medicines, initialIllnessReview, getMedicines, createReview, submitForm }) => {
	useEffect(() => {
		getMedicines();
	}, []);

	return(
		<IllnessReviewCreate
			medicines={medicines}
			illnessReview={initialIllnessReview}
			onReviewFormSubmit={submitForm}
			onReviewCreate={createReview}
		/>
	);
};

const mapStateToProps = state => ({
	medicines: getMedicinesSelector(state),
	initialIllnessReview: getInitialIllnessReviewSelector(state),
});

const mapDispatchToProps = (dispatch, { history, match: { params: { id } } }) => ({
	submitForm: () => dispatch(submit(FORM_NAME)),
	createReview: review => dispatch(createReviewAction(Number(id), review, history)),
	getMedicines: () => dispatch(getMedicinesAction(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessReviewCreateContainer = connector(IllnessReviewCreateContainerComponent);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { ICreateIllness } from 'models';
import { FORM_NAME } from 'components/common/forms/IllnessCreateForm';

import { IllnessCreate } from './IllnessCreate';
import { getFilterDataAction, createIllnessAction } from './epicActions';
import { getNormalizedSymptomsSelector, getNormalizedMedicinesSelector, getNormalizedRecommendationsSelector } from './selectors';

export const IllnessCreateContainerComponent = ({ symptoms, medicines, recommendations, getFilterData, submitForm, createIllness }) => {
	useEffect(() => {
		getFilterData();
	}, [getFilterData]);

	return (
		<IllnessCreate
			symptoms={symptoms}
			medicines={medicines}
			recommendations={recommendations}
			onSubmitForm={submitForm}
			onCreateIllness={createIllness}
		/>
	);
};

const mapStateToProps = state => ({
	symptoms: getNormalizedSymptomsSelector(state),
	medicines: getNormalizedMedicinesSelector(state),
	recommendations: getNormalizedRecommendationsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	getFilterData: () => dispatch(getFilterDataAction()),
	submitForm: () => dispatch(submit(FORM_NAME)),
	createIllness: (illness: ICreateIllness) => dispatch(createIllnessAction(illness)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessCreateContainer = connector(IllnessCreateContainerComponent);

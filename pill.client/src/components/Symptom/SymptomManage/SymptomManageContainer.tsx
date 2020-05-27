import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { submit, reset } from 'redux-form';

import { FORM_NAME } from 'components/common/forms/SymptomCreateForm';

import { SymptomManage } from './SymptomManage';
import { getSymptomsAction, createSymptomAction, updateSymptomAction, deleteSymptomAction } from './epicActions';
import { getSymptomsListSelector } from './selectors';

export const SymptomManageContainerComponent = ({ symptoms, getSymptoms, createSymptom, updateSymptom, deleteSymptom, submitForm }) => {
	useEffect(() => {
		getSymptoms();
	}, []);

	return (
		<SymptomManage
			symptoms={symptoms}
			onSubmitCreateForm={submitForm}
			onSubmitEditForm={submitForm}
			onCreate={createSymptom}
			onEdit={updateSymptom}
			onDelete={deleteSymptom}
		/>
	);
};

const mapStateToProps = state => ({
	symptoms: getSymptomsListSelector(state),
});

const mapDispatchToProps = dispatch => ({
	getSymptoms: () => dispatch(getSymptomsAction()),
	createSymptom: symptom => {
		dispatch(createSymptomAction(symptom));
		dispatch(reset(FORM_NAME));
	},
	updateSymptom: symptom => dispatch(updateSymptomAction(symptom)),
	deleteSymptom: id => dispatch(deleteSymptomAction(id)),
	submitForm: formName => dispatch(submit(formName)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const SymptomManageContainer = connector(SymptomManageContainerComponent);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IllnessList } from './lllnessList';
import { getSymptomsAction } from './epicActions';
import { getSymptomsListSelector } from './selectors';

export const IllnessListContainerComponent = ({ symptomsList, getSymptoms }) => {
	useEffect(() => {
		getSymptoms()
	}, []);

	return (
		<IllnessList symptoms={symptomsList} />
	);
};

const mapStateToProps = state => ({
	symptomsList: getSymptomsListSelector(state),
});

const mapDispatchToProps = ({
	getSymptoms: getSymptomsAction,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessListContainer = connector(IllnessListContainerComponent);

import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { IllnessList } from './lllnessList';
import { getSymptomsAction, getIllnessesBySymptomIdsAction } from './epicActions';
import { getSymptomsListSelector, getIllnessesListSelector } from './selectors';

export const IllnessListContainerComponent = ({ symptomsList, illnessesList, getSymptoms, getIllnessesBySymptomIds }) => {
	useEffect(() => {
		getSymptoms();
	}, []);

	return (
		<IllnessList
			symptoms={symptomsList}
			illnesses={illnessesList}
			onIllnessesFilter={getIllnessesBySymptomIds}
		/>
	);
};

const mapStateToProps = state => ({
	symptomsList: getSymptomsListSelector(state),
	illnessesList: getIllnessesListSelector(state),
});

const mapDispatchToProps = {
	getSymptoms: getSymptomsAction,
	getIllnessesBySymptomIds: getIllnessesBySymptomIdsAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessListContainer = connector(IllnessListContainerComponent);

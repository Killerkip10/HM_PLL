import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { IllnessList } from './lllnessList';
import { getSymptomsAction, getIllnessesBySymptomIdsAction } from './epicActions';
import { getNormalizedSymptomsListSelector, getIllnessesListSelector } from './selectors';

export const IllnessListContainerComponent = ({ symptomsList, illnessesList, getSymptoms, getIllnessesBySymptomIds }) => {
	useEffect(() => {
		getSymptoms();
	}, []);

	const handleIllnessesFilter = useCallback((ids: number[]) => getIllnessesBySymptomIds(ids), [getIllnessesBySymptomIds]);

	return (
		<IllnessList
			symptoms={symptomsList}
			illnesses={illnessesList}
			onIllnessesFilter={handleIllnessesFilter}
		/>
	);
};

const mapStateToProps = state => ({
	symptomsList: getNormalizedSymptomsListSelector(state),
	illnessesList: getIllnessesListSelector(state),
});

const mapDispatchToProps = ({
	getSymptoms: getSymptomsAction,
	getIllnessesBySymptomIds: getIllnessesBySymptomIdsAction,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessListContainer = connector(IllnessListContainerComponent);

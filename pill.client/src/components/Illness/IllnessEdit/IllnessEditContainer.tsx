import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IllnessEdit } from './IllnessEdit';
import { getInitialDataAction } from './epicActions';
import {
	getNormalizedIllnessSelector,
	getSymptomsListSelector,
	getMedicinesSelector,
	getRecommendationsSelector,
} from './selectors';

export const IllnessEditContainerComponent = ({ illness, symptoms, medicines, recommendations, getInitialData }) => {
	useEffect(() => {
		getInitialData();
	}, []);

	return <IllnessEdit illness={illness} symptoms={symptoms} medicines={medicines} recommendations={recommendations} />
};

const mapStateToProps = state => ({
	illness: getNormalizedIllnessSelector(state),
	symptoms: getSymptomsListSelector(state),
	medicines: getMedicinesSelector(state),
	recommendations: getRecommendationsSelector(state),
});

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
	getInitialData: () => dispatch(getInitialDataAction(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessEditContainer = connector(IllnessEditContainerComponent);

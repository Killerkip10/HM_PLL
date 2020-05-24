import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IllnessCreate } from './IllnessCreate';
import { getFilterDataAction } from './epicActions';
import { getSymptomsListSelector, getMedicinesSelector, getRecommendationsSelector } from './selectors';

export const IllnessCreateContainerComponent = ({ symptoms, medicines, recommendations, getFilterData }) => {
	useEffect(() => {
		getFilterData();
	}, [getFilterData]);

	return (
		<IllnessCreate symptoms={symptoms} medicines={medicines} recommendations={recommendations} />
	);
};

const mapStateToProps = state => ({
	symptoms: getSymptomsListSelector(state),
	medicines: getMedicinesSelector(state),
	recommendations: getRecommendationsSelector(state),
});

const mapDispatchToProps = {
	getFilterData: getFilterDataAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessCreateContainer = connector(IllnessCreateContainerComponent);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IllnessDetails } from './IllnessDetails';
import { getIllnessDetailsAction } from './epicActions';

export const IllnessDetailsContainerComponent = ({ match: { params: { id } }, getIllnessDetails }) => {
	useEffect(() => {
		getIllnessDetails(id);
	}, []);

	return (
		<IllnessDetails />
	);
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	getIllnessDetails: getIllnessDetailsAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessDetailsContainer = connector(IllnessDetailsContainerComponent);

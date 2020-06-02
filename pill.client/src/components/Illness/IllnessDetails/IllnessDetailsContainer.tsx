import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { IIllness } from 'models';
import { ROUTE } from 'configs';

import { IllnessDetails } from './IllnessDetails';
import { getIllnessDetailsAction } from './epicActions';
import { getIsFetchingSelector, getIllnessInfoSelector } from './selectors';

interface IProps {
	match: any;
	illnessInfo: IIllness;
	getIllnessDetails: any;
}

export const IllnessDetailsContainerComponent = ({ match: { params: { id } }, history, illnessInfo, getIllnessDetails }: IProps) => {
	useEffect(() => {
		getIllnessDetails(id);
	}, []);

	const handleLeaveFeedback = useCallback(() => history.push(`${ROUTE.ILLNESS_REVIEW_CREATE}/${id}`), [history, id]);

	return (
		<IllnessDetails
			name={illnessInfo.name}
			description={illnessInfo.description}
			symptoms={illnessInfo.symptoms}
			medicines={illnessInfo.medicines}
			recommendations={illnessInfo.recommendations}
			updatedAt={illnessInfo.updatedAt}
			onLeaveFeedback={handleLeaveFeedback}
		/>
	);
};

const mapStateToProps = state => ({
	isFetching: getIsFetchingSelector(state),
	illnessInfo: getIllnessInfoSelector(state),
});

const mapDispatchToProps = {
	getIllnessDetails: getIllnessDetailsAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessDetailsContainer = connector(IllnessDetailsContainerComponent);

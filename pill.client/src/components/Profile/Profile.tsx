import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import { isUserAuthorized } from 'utils';

import { getIsFetchingSelector, getFirstNameSelector } from './selectors';
import { getProfileAction } from './epicActions';

interface IProps {
	children: any;
	location: any;
	isFetching: boolean;
	firstName: string;
	getProfile: any;
}

export const ProfileComponent = ({ children, location, isFetching, firstName, getProfile }: IProps) => {
	useEffect(() => {
		if (isUserAuthorized() && !firstName) {
			getProfile();
		}
	}, [location]);

	return (
		<>
			{/*{isFetching && <div>Loader</div>}*/}
			{children}
		</>
	);
};

const mapStateToProps = state => ({
	isFetching: getIsFetchingSelector(state),
	firstName: getFirstNameSelector(state),
});

const mapDispatchToProps = {
	getProfile: getProfileAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const Profile = flowRight(
	withRouter,
	connector,
)(ProfileComponent);

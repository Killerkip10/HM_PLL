import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import { ROUTE } from 'configs';
import { getCodeSelector } from 'store';

interface IProps {
	code: number;
	children: any;
	location: any;
	history: any;
}

export const ErrorHandlerComponent = ({ code, children, history }: IProps) => {
	switch (code) {
		case 401:
			history.push(ROUTE.LOGIN);
			break;
	}

	return (
		<>
			{children}
		</>
	);
};

const mapStateToProps = state => ({
	code: getCodeSelector(state),
});

const connector = connect(mapStateToProps);

export const ErrorHandler = flowRight(
	withRouter,
	connector,
)(ErrorHandlerComponent);
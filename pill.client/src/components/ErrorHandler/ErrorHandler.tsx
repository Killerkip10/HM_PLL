import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import { ROUTE } from 'configs';
import { getCodeSelector, resetCodeAction } from 'store';
import { resetUserAuthorization } from 'utils';

interface IProps {
	code: number;
	children: any;
	location: any;
	history: any;
	resetCode: any;
}

export const ErrorHandlerComponent = ({ code, children, history, resetCode }: IProps) => {
	useEffect(() => {
		switch (code) {
			case 401:
				resetUserAuthorization();
				history.push(ROUTE.LOGIN);
				resetCode();
				break;
		}
	}, [code]);

	return (
		<>
			{children}
		</>
	);
};

const mapStateToProps = state => ({
	code: getCodeSelector(state),
});

const mapDispatchToProps = ({
	resetCode: resetCodeAction,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const ErrorHandler = flowRight(
	withRouter,
	connector,
)(ErrorHandlerComponent);
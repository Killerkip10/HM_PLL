import React from 'react';
import { withRouter } from 'react-router-dom';

import { ROUTE } from 'configs/routes';

export const HeaderComponent = ({ history }) => {
	return (
		<>
			<button onClick={() => history.push(ROUTE.LOGIN)}>Login</button>
			<button onClick={() => history.push(ROUTE.REGISTRATION)}>Registration</button>
			<button onClick={() => history.push(ROUTE.ILLNESSES)}>Illnesses</button>
		</>
	);
};

export const Header = withRouter(HeaderComponent);

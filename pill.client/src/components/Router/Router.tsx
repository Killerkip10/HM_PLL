import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from 'components/Login';
import { Registration } from 'components/Registration';

export const Router = () => (
	<Switch>
		<Route exact path="/" component={Login} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/registration" component={Registration} />
	</Switch>
);

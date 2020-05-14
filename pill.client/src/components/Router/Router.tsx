import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from 'configs';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { IllnessListContainer, IllnessDetailsContainer } from 'components/Illness';

export const Router = () => (
	<Switch>
		<Route exact path="/" component={IllnessListContainer} />
		<Route exact path={ROUTE.LOGIN} component={Login} />
		<Route exact path={ROUTE.REGISTRATION} component={Registration} />
		<Route exact path={ROUTE.ILLNESSES} component={IllnessListContainer} />
		<Route exact path={`${ROUTE.ILLNESSES_DETAILS}/:id`} component={IllnessDetailsContainer} />
	</Switch>
);

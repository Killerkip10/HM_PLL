import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from 'configs';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import { IllnessListContainer, IllnessDetailsContainer, IllnessCreateContainer } from 'components/Illness';

export const Router = () => (
	<Switch>
		<Route exact path="/" component={IllnessListContainer} />
		<Route exact path={ROUTE.LOGIN} component={Login} />
		<Route exact path={ROUTE.REGISTRATION} component={Registration} />
		<Route exact path={ROUTE.ILLNESS} component={IllnessListContainer} />
		<Route exact path={`${ROUTE.ILLNESS_DETAILS}/:id`} component={IllnessDetailsContainer} />
		<Route exact path={ROUTE.ILLNESS_CREATE} component={IllnessCreateContainer} />
	</Switch>
);

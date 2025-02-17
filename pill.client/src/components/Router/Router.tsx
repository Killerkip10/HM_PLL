import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTE } from 'configs';
import { Login } from 'components/Login';
import { Registration } from 'components/Registration';
import {
	IllnessListContainer,
	IllnessDetailsContainer,
	IllnessCreateContainer,
	IllnessReviewCreateContainer,
	IllnessEditContainer,
	IllnessManageContainer,
	IllnessReviewContainer,
} from 'components/Illness';
import { SymptomManageContainer } from 'components/Symptom';

export const Router = () => (
	<Switch>
		<Route exact path="/" component={IllnessListContainer} />
		<Route exact path={ROUTE.LOGIN} component={Login} />
		<Route exact path={ROUTE.REGISTRATION} component={Registration} />

		<Route exact path={ROUTE.ILLNESS} component={IllnessListContainer} />
		<Route exact path={`${ROUTE.ILLNESS_DETAILS}/:id`} component={IllnessDetailsContainer} />
		<Route exact path={ROUTE.ILLNESS_CREATE} component={IllnessCreateContainer} />
		<Route exact path={ROUTE.ILLNESS_MANAGE} component={IllnessManageContainer} />
		<Route exact path={`${ROUTE.ILLNESS_EDIT}/:id`} component={IllnessEditContainer} />
		<Route exact path={`${ROUTE.ILLNESS_REVIEW}/:id`} component={IllnessReviewContainer} />
		<Route exact path={`${ROUTE.ILLNESS_REVIEW_CREATE}/:id`} component={IllnessReviewCreateContainer} />

		<Route exact path={ROUTE.SYMPTOM_MANAGE} component={SymptomManageContainer} />
	</Switch>
);

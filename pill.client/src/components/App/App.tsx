import React, { useEffect, useCallback, memo } from 'react';
import { BrowserRouter, useLocation, useHistory } from 'react-router-dom';

import { Router } from 'components/Router';

export const App = memo(() => {
	console.log(useLocation());
	const history = useHistory();

	const handleGoClick = useCallback(() => history.push('/registration'), [history]);

	return (
		<>
			<header>Header</header>
			<Router />
			<button onClick={handleGoClick}>Go</button>
			<footer>Footer</footer>
		</>
	);
});

export const AppContainer = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

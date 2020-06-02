import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import { Router } from 'components/Router';
import { Profile } from 'components/Profile';
import { ErrorHandler } from 'components/ErrorHandler';
import { Header } from 'components/Header';

export const App = memo(() => (
	<>
		<Header />
		<Router />
	</>
));

export const AppContainer = memo(() => (
	<BrowserRouter>
		<Provider store={store}>
			<Profile>
				<ErrorHandler>
					<App />
				</ErrorHandler>
			</Profile>
		</Provider>
	</BrowserRouter>
));

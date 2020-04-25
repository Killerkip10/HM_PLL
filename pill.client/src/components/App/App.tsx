import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import { Router } from 'components/Router';
import { Profile } from 'components/Profile';
import { Permissions } from 'components/Permissions';

export const App = memo(() => (
	<>
		<header>Header</header>
		<Router />
		<footer>Footer</footer>
	</>
));

export const AppContainer = memo(() => (
	<BrowserRouter>
		<Provider store={store}>
			<Profile>
				<Permissions>
					<App />
				</Permissions>
			</Profile>
		</Provider>
	</BrowserRouter>
));

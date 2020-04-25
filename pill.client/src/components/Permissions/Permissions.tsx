import React from 'react';
import { withRouter } from 'react-router-dom';

// import { PUBLIC_ROUTES } from 'configs';

export const PermissionsComponent = ({ children, location }) => {
	return (
		<>
			{children}
		</>
	);
};

export const Permissions = withRouter(PermissionsComponent);
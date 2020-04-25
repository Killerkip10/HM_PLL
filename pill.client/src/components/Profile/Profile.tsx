import React from 'react';
import { withRouter } from 'react-router-dom';

export const ProfileComponent = ({ children, location }) => {
	console.log(location);

	return (
		<>
			{children}
		</>
	);
};

export const Profile = withRouter(ProfileComponent);
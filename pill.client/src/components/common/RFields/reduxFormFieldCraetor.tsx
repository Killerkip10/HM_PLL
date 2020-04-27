import React from 'react';

export const renderReduxField = WrappedComponent => ({ input, ...props }) => (
	<WrappedComponent
		{...input}
		{...props}
	/>
);
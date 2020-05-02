import React from 'react';

export const Select = ({ meta: { touched, error }, children, ...props }) => (
	<div>
		<select {...props}>{children}</select>
		{touched && error}
	</div>
);

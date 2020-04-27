import React from 'react';

export const Input = ({ meta: { touched, error }, ...props }) => (
	<div>
		<input {...props} />
		{touched && error}
	</div>
);
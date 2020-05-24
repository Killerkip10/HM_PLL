import React, { memo, useMemo } from 'react';

export const Select = memo(({ touched, error, data, children, ...props }) => {
	const renderOptions = useMemo(() => (
		data && data.map(({ id, name }) => <option key={id} value={id}>{name}</option>)
	), [data]);

	return (
		<div>
			<select {...props}>
				{data
					? renderOptions
					: children
				}
			</select>
			{touched && error}
		</div>
	)
});

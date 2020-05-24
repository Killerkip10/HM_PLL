import React, { useCallback } from 'react';

export const withRemoveIcon = WrappedComponent => ({ index, onRemove, ...props }) => {
	const handleRemoveClick = useCallback(() => onRemove(index), [onRemove, index]);

	return (
		<div>
			<WrappedComponent {...props} />
			<div onClick={handleRemoveClick}>X</div>
		</div>
	);
};

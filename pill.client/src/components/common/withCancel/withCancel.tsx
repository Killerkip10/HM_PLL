import React, { useCallback } from 'react';
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core';

const styles = () => ({
	row: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		cursor: 'pointer',
	}
});

export const withRemoveIcon = WrappedComponent => withStyles(styles)(({ index, onRemove, classes, ...props }) => {
	const handleRemoveClick = useCallback(() => onRemove(index), [onRemove, index]);

	return (
		<div className={classes.row}>
			<WrappedComponent {...props} />
			<Icon className={classes.icon} onClick={handleRemoveClick}>clear</Icon>
		</div>
	);
});

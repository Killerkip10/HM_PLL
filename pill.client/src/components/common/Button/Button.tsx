import React, { memo } from 'react';
import { flowRight } from 'lodash';
import UIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	button: {
		color: 'white',
		textTransform: 'none',
		padding: '6px 18px',
	},
	primary: {
		backgroundColor: '#9bc837',
		'&:hover': {
			backgroundColor: '#6b912a',
		},
	},
	secondary: {
		backgroundColor: '#30b6dd',
		'&:hover': {
			backgroundColor: '#2e93b9',
		},
	},
});

export const ButtonComponent = ({ color = 'primary', children, classes, className, ...props }) => (
	<UIButton className={`${classes.button} ${classes[color]} ${className}`} {...props}>{children}</UIButton>
);

export const Button = flowRight(
	memo,
	withStyles(styles),
)(ButtonComponent);

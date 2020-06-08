import React, { memo } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
	panel: {
		display: 'flex',
		justifyContent: 'center',
	},
	content: {
		width: '100%',
		maxWidth: '1200px',
		margin: '0 20px 20px 20px',
		boxSizing: 'border-box',
	},
	padding: {
		padding: '20px',
	},
	marginTop: {
		marginTop: '20px',
	},
});

export const PageComponent = ({ children, padding = true, marginTop = true, classes, className }) => (
	<div className={classes.panel}>
		<Paper className={`${classes.content} ${padding ? classes.padding : ''} ${marginTop ? classes.marginTop : ''} ${className}`}>
			{children}
		</Paper>
	</div>
);

export const Page = compose(
	withStyles(styles),
	memo,
)(PageComponent);

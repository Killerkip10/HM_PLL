import React, { memo } from 'react';
import { compose } from 'redux';
import UIToolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		boxShadow: '0 -2px 10px 0 rgba(51,51,51,0.2)',
		minHeight: '0',
		height: '56px',
		'& > :first-child': {
			fontSize: '17px',
			fontWeight: '500',
		},
	},
});

export const ToolbarComponent = memo(({ children, classes }) => (
	<UIToolbar className={classes.toolbar}>
		{children}
	</UIToolbar>
));

export const Toolbar = compose(
	withStyles(styles),
	memo,
)(ToolbarComponent);

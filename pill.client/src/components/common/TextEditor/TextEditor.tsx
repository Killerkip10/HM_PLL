import React, { memo, useMemo, useCallback } from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import JoditEditor from 'jodit-react';

const styles = () => ({
	error: {
		marginTop: '5px',
		height: '12px',
		fontSize: '12px',
		color: '#f44336',
	},
});

export const TextEditorComponent = ({ config = {}, onChange, onBlur, touched, error, classes, ...props}) => {
	const editorConfig = useMemo(() => ({ readonly: false, minHeight: 'auto', ...config }), [config]);

	const handleEditorBlur = useCallback((value) => {
		onChange(value);
		onBlur();
	}, [onChange, onBlur]);

	return (
		<div className={props.className}>
			<JoditEditor
				config={editorConfig}
				onBlur={handleEditorBlur}
				{...props}
			/>
			<div className={classes.error}>{touched && error}</div>
		</div>
	);
};

export const TextEditor = compose(
	withStyles(styles),
	memo,
)(TextEditorComponent);

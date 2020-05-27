import React, { memo, useMemo, useCallback } from 'react';
import JoditEditor from 'jodit-react';

export const TextEditor = memo(({ config = {}, onChange, onBlur, touched, error, ...props}) => {
	const editorConfig = useMemo(() => ({ readonly: false, minHeight: 'auto', ...config }), [config]);

	const handleEditorBlur = useCallback((value) => {
		onChange(value);
		onBlur();
	}, [onChange, onBlur]);

	return (
		<div>
			<JoditEditor
				config={editorConfig}
				onBlur={handleEditorBlur}
				{...props}
			/>
			<div>{touched && error}</div>
		</div>
	);
});

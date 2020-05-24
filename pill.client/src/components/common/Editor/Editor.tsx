import React, { memo } from 'react';
import { Editor, EditorState } from 'draft-js';

export const TextEditor = memo((props) => (
	<Editor editorState={EditorState.createEmpty()} onChange={() => {}} {...props} />
));


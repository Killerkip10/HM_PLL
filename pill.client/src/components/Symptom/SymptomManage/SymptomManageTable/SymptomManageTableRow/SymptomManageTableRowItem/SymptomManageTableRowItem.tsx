import React, { memo } from 'react';

export const SymptomManageTableRowItem = memo(({ name, updatedAt, createdAt, onEdit, onDelete }) => (
	<div>
		<div>{name}</div>
		<div>{updatedAt}</div>
		<div>{createdAt}</div>
		<button type="button" onClick={onEdit}>Edit</button>
		<button type="button" onClick={onDelete}>Delete</button>
	</div>
));

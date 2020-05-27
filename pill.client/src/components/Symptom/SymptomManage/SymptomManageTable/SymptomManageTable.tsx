import React, { memo, useMemo } from 'react';

import { SymptomManageTableRow } from './SymptomManageTableRow';

export const SymptomManageTable = memo(({ symptoms, onSubmitEditForm, onEdit, onDelete }) => {
	const renderTableRows = useMemo(() => (
		symptoms.map(s => (
			<SymptomManageTableRow
				key={s.id}
				symptom={s}
				onSubmitEditForm={onSubmitEditForm}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		))
	), [symptoms]);

	return (
		<div>
			{renderTableRows}
		</div>
	);
});

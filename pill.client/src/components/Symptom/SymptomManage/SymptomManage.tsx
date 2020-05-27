import React, { memo, useCallback } from 'react';

import { SymptomCreateForm, FORM_NAME } from 'components/common/forms/SymptomCreateForm';

import { SymptomManageTable } from './SymptomManageTable';

export const SymptomManage = memo(({ symptoms, onSubmitCreateForm, onSubmitEditForm, onCreate, onEdit, onDelete }) => {
	const handleSubmitCreateForm = useCallback(() => onSubmitCreateForm(FORM_NAME), [onSubmitCreateForm]);

	return (
		<div>
			<div>Symptoms</div>
			<div>
				<SymptomCreateForm onSubmit={onCreate} />
				<button type="button" onClick={handleSubmitCreateForm}>Create</button>
			</div>

			<SymptomManageTable symptoms={symptoms} onSubmitEditForm={onSubmitEditForm} onEdit={onEdit} onDelete={onDelete} />
		</div>
	)
});

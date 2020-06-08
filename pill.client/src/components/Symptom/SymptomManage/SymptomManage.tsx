import React, { memo, useCallback } from 'react';

import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';
import { SymptomCreateForm, FORM_NAME } from 'components/common/forms/SymptomCreateForm';

import { SymptomManageTable } from './SymptomManageTable';

export const SymptomManage = memo(({ symptoms, onSubmitCreateForm, onSubmitEditForm, onCreate, onEdit, onDelete }) => {
	const handleSubmitCreateForm = useCallback(() => onSubmitCreateForm(FORM_NAME), [onSubmitCreateForm]);

	return (
		<div>
			<Toolbar>
				<div>Symptoms</div>
			</Toolbar>

			<Page>
				<div>
					<SymptomCreateForm onSubmit={onCreate} />
					<button type="button" onClick={handleSubmitCreateForm}>Create</button>
				</div>

				<SymptomManageTable symptoms={symptoms} onSubmitEditForm={onSubmitEditForm} onEdit={onEdit} onDelete={onDelete} />
			</Page>
		</div>
	);
});

import React, { useState, useCallback, useMemo, memo } from 'react';

import { SymptomCreateForm, FORM_NAME } from 'components/common/forms/SymptomCreateForm';

import { SymptomManageTableRowItem } from './SymptomManageTableRowItem';

export const SymptomManageTableRow = memo(({ symptom, onSubmitEditForm, onEdit, onDelete }) => {
	const [isEdit, setIsEdit] = useState(false);

	const formName = useMemo(() => `${FORM_NAME}[${symptom.id}]`, [symptom]);

	const handleEditMode = useCallback(() => setIsEdit(!isEdit),[setIsEdit, isEdit]);

	const handleEditForm = useCallback(() => onSubmitEditForm(formName), [onSubmitEditForm, formName]);

	const handleDelete = useCallback(() => onDelete(symptom.id), [onDelete, symptom]);

	const handleSubmitForm = useCallback((data) => {
		onEdit(data);
		handleEditMode();
	}, [onEdit, handleEditMode]);

	return isEdit
		? <div>
				<SymptomCreateForm form={formName} initialValues={symptom} onSubmit={handleSubmitForm} />
				<button type="button" onClick={handleEditForm}>Edit</button>
				<button type="button" onClick={handleEditMode}>Cancel</button>
			</div>
		: <SymptomManageTableRowItem
				name={symptom.name}
				updatedAt={symptom.updatedAt}
				createdAt={symptom.createdAt}
				onEdit={handleEditMode}
				onDelete={handleDelete}
			/>;
});

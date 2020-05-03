import React, { memo, useMemo, useCallback } from 'react';

import { RFields } from 'components/common/RFields';

export const FilterSymptomsListItemComponent = ({ index, name, symptoms, onRemoveSymptom }) => {
	const renderSymptomOptions = useMemo(() => (
		symptoms.map(s => <option key={s.id} value={s.id}>{s.name}</option>)
	), [symptoms]);

	const handleRemoveSymptomClick = useCallback(() => (
		onRemoveSymptom(index)
	), [onRemoveSymptom, index]);

	return (
		<div>
			<RFields.Select name={name}>
				{renderSymptomOptions}
			</RFields.Select>
			<button type="button" onClick={handleRemoveSymptomClick}>Remove</button>
		</div>
	);
};

export const FilterSymptomsListItem = memo(FilterSymptomsListItemComponent);

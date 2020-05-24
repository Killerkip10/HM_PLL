import React from 'react'

import { FilterSymptomsListItem } from './FilterSymptomsListItem';

export const FilterSymptomsList = ({ fields, symptoms, onRemoveSymptom }) => (
	<div>
		{fields.map((name, index) => (
			<FilterSymptomsListItem
				key={index}
				name={name}
				index={index}
				symptoms={symptoms}
				onRemoveSymptom={onRemoveSymptom}
			/>
		))}
	</div>
);

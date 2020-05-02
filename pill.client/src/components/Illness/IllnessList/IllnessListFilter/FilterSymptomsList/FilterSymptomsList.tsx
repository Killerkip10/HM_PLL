import React from 'react';

import { RFields } from 'components/common/RFields';

export const FilterSymptomsList = ({ fields, symptoms }) => (
	<div>
		{fields.map(name => (
			<RFields.Select name={name}>
				{symptoms.map(s => (
					<option value={s.id}>{s.name}</option>
				))}
			</RFields.Select>
		))}
	</div>
);

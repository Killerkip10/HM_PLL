import React, { memo, useMemo } from 'react';

import { TextEditor } from 'components/common/TextEditor';
import { IMedicine, IRecommendation, ISymptom } from 'models';

interface IProps {
	name: string;
	description: string;
	updatedAt: string;
	medicines: IMedicine[];
	recommendations: IRecommendation[];
	symptoms: ISymptom[];
}

export const IllnessDetailsComponent = ({ name, description, symptoms = [], recommendations = [], medicines = [], updatedAt }: IProps) => {
	const textEditorConfig = useMemo(() => ({ readonly: true, toolbar: false, showXPathInStatusbar: false, showWordsCounter: false, showCharsCounter: false }), []);

	return (
		<div>
			<h1>{name}</h1>

			<TextEditor value={description} config={textEditorConfig} />

			<h3>Symptoms</h3>
			<ul>
				{symptoms.map(({ id, name }) => <li key={id}>{name}</li>)}
			</ul>

			<h3>Recommendations</h3>
			<ul>
				{recommendations.map(({ id, name }) => <li key={id}>{name}</li>)}
			</ul>

			<h3>Medicines</h3>
			<ul>
				{medicines.map(({ id, name }) => <li key={id}>{name}</li>)}
			</ul>

			<div>{updatedAt}</div>
		</div>
	);
};

export const IllnessDetails = memo(IllnessDetailsComponent);

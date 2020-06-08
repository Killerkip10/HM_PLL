import React, { memo, useMemo } from 'react';

import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';
import { TextEditor } from 'components/common/TextEditor';
import { Button } from 'components/common/Button';
import { IMedicine, IRecommendation, ISymptom } from 'models';

interface IProps {
	name: string;
	description: string;
	updatedAt: string;
	medicines: IMedicine[];
	recommendations: IRecommendation[];
	symptoms: ISymptom[];
}

export const IllnessDetailsComponent = ({ name, description, symptoms = [], recommendations = [], medicines = [], updatedAt, onLeaveFeedback }: IProps) => {
	const textEditorConfig = useMemo(() => ({ readonly: true, toolbar: false, showXPathInStatusbar: false, showWordsCounter: false, showCharsCounter: false }), []);

	return (
		<div>
			<Toolbar>
				<div>Illness details</div>
				<div>{name}</div>
			</Toolbar>

			<Page>
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

				<Button color="secondary" onClick={onLeaveFeedback}>Leave feedback</Button>
			</Page>
		</div>
	);
};

export const IllnessDetails = memo(IllnessDetailsComponent);

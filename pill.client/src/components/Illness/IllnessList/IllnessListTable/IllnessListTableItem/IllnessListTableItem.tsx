import React, { memo } from 'react';

import { ROUTE } from 'configs';

interface IProps {
	id: number;
	name: string;
	description: string;
}

export const IllnessListTableItemComponent = ({ id, name, description }: IProps) => (
	<>
		<a href={`${ROUTE.ILLNESSES_DETAILS}/${id}`} target="_blank">{name}</a>
		<div>{description}</div>
	</>
);

export const IllnessListTableItem = memo(IllnessListTableItemComponent);

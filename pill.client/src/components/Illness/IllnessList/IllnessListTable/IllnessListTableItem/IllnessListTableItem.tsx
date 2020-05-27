import React, { memo } from 'react';

import { ROUTE } from 'configs';

interface IProps {
	id: number;
	name: string;
	description: string;
}

export const IllnessListTableItemComponent = ({ id, name, description }: IProps) => (
	<div>
		<a href={`${ROUTE.ILLNESS_DETAILS}/${id}`} target="_blank">{name}</a>
	</div>
);

export const IllnessListTableItem = memo(IllnessListTableItemComponent);

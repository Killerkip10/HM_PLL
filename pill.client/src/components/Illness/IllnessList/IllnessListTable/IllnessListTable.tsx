import React, { memo } from 'react';

import { IIllnessShort } from 'models';

import { IllnessListTableItem } from './IllnessListTableItem';

interface IProps {
	illnesses: IIllnessShort[],
}

export const IllnessListTableComponent = ({ illnesses }: IProps) => (
	illnesses.map(({ id, name }) => <IllnessListTableItem key={id} id={id} name={name} />)
);

export const IllnessListTable = memo(IllnessListTableComponent);

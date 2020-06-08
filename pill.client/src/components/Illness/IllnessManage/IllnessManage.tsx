import React, { memo } from 'react';

import { Toolbar } from 'components/common/Toolbar';
import { Page } from 'components/common/Page';
import { Button } from 'components/common/Button';

import { IllnessManageTable } from './IllnessManageTable';

export const IllnessManageComponent = ({ illnesses, onCreate, onEdit, onDelete, onReview }) => (
	<div>
		<Toolbar>
			<div>Illness manage</div>
			<Button onClick={onCreate}>Create</Button>
		</Toolbar>

		<Page padding={false}>
			<IllnessManageTable illnesses={illnesses} onEdit={onEdit} onDelete={onDelete} onReview={onReview} />
		</Page>
	</div>
);

export const IllnessManage = memo(IllnessManageComponent);

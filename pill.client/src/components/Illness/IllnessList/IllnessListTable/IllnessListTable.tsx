import React, { memo } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Link from "@material-ui/core/Link";

import { IIllnessShort } from 'models';
import { ROUTE } from 'configs';
import { Rating } from 'components/common/Rating';

interface IProps {
	illnesses: IIllnessShort[],
}

export const IllnessListTableComponent = ({ illnesses }: IProps) => (
	<TableContainer component={Paper}>
		<Table>
			{Boolean(illnesses.length) &&
				<TableHead>
					<TableRow>
						<TableCell align="left">Name</TableCell>
						<TableCell align="right">Rating</TableCell>
					</TableRow>
				</TableHead>
			}
			<TableBody>
				{illnesses.map(({ id, name, rating }) => (
					<TableRow key={id}>
						<TableCell align="left">
							<Link href={`${ROUTE.ILLNESS_DETAILS}/${id}`} target="_blank">{name}</Link>
						</TableCell>
						<TableCell align="right">
							<Rating value={rating} readOnly />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

export const IllnessListTable = memo(IllnessListTableComponent);

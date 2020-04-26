import { Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED, FORBIDDEN } from 'http-status';

import { ROLE } from '../../../infra/constants';

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.profile) {
		next();
	} else {
		res.status(UNAUTHORIZED).send();
	}
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.profile.role === ROLE.ADMIN) {
		next();
	} else {
		res.status(FORBIDDEN).send();
	}
};

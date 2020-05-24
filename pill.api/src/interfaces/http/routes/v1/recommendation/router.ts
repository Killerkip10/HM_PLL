import { Router } from 'express';
import { BAD_REQUEST } from 'http-status';

import { isAuthorized } from '../../../middlewares';
import { Get } from '../../../../../app/recommendation';

export default (
	getUseCase: Get,
) => {
	const router = Router();

	router.get('/', isAuthorized, (_, res) => getUseCase
		.all()
		.then(data => res.send(data))
		.catch(error => res.status(BAD_REQUEST).send(error)),
	);

	return router;
};

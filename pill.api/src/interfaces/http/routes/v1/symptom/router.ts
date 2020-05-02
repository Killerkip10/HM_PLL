import { Router } from 'express';

import { isAuthorized } from '../../../middlewares';
import { Get } from '../../../../../app/symptom';

export default (getUseCase: Get) => {
	const router = Router();

	router.get('/', isAuthorized, (_, res) => getUseCase
		.all()
		.then(data => res.send(data)),
	);

	return router;
};

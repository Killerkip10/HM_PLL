import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
	const {
		methods: { symptom: { Get } },
		repository: { symptomRepository },
	}: IContainer = container.cradle;

	const getUseCase = new Get(symptomRepository);

	return router(getUseCase);
};

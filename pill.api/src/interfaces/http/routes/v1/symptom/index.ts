import router from './router';
import { container, IContainer } from '../../../../../container';

export default () => {
	const {
		methods: { symptom: { Get, Post, Put, Delete } },
		repository: { symptomRepository },
	}: IContainer = container.cradle;

	const getUseCase = new Get(symptomRepository);
	const createUseCase = new Post(symptomRepository);
	const updateUseCase = new Put(symptomRepository);
	const deleteUseCase = new Delete(symptomRepository);

	return router(getUseCase, createUseCase, updateUseCase, deleteUseCase);
};

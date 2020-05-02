import { SymptomRepository } from '../../infra/repositories';

export class Get {
	public constructor(
		private symptomRepository: SymptomRepository,
	) { }

	public all() {
		return this.symptomRepository.getAll();
	}
}
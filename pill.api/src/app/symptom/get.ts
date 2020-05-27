import { SymptomRepository } from '../../infra/repositories';

export class Get {
	public constructor(
		private symptomRepository: SymptomRepository,
	) { }

	public all(query: object) {
		return this.symptomRepository.getAll(query);
	}

	public allShort() {
		return this.symptomRepository.getAllShort();
	}
}

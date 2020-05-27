import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft } from 'fp-ts/lib/Either';

import { SymptomRepository } from '../../infra/repositories';
import { Symptom, ISymptom } from '../../domain';

export class Put {
	constructor(
		private symptomRepository: SymptomRepository,
	) { }

	public update(symptom: ISymptom) {
		const entity = Symptom.decode(symptom);

		if (isLeft(entity)) {
			return Promise.reject(PathReporter.report(entity));
		}

		return this.symptomRepository.update(symptom);
	}
}

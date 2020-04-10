import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft } from 'fp-ts/lib/Either';

import { Medicine, IMedicine } from '../../domain';
import { MedicineRepository } from '../../infra/repositories';

export class Post {
  public constructor(
    private medicineRepository: MedicineRepository,
  ) { }

  public create(medicine: IMedicine) {
    const entity = Medicine.decode(medicine);

    if (isLeft(entity)) {
      return Promise.reject(PathReporter.report(entity));
    }

    return this.medicineRepository.create(medicine);
  }
}

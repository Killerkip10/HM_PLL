import { MedicineRepository } from '../../infra/repositories';

export class Get {
  public constructor(
    private medicineRepository: MedicineRepository,
  ) { }

  public all() {
    return this.medicineRepository.getAll();
  }

  public conflicts() {
    return this.medicineRepository.getMedicineConflicts([2, 4]);
  }
}

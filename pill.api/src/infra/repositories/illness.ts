import { Illness } from '../models/Illness';
import { IIllness } from '../../domain';

export class IllnessRepository {
  public getAll() {
    return Illness.findAll();
  }

  public create(illness: IIllness) {
    return Illness.create(illness);
  }
}
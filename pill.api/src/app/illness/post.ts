import { PathReporter } from 'io-ts/lib/PathReporter';
import { isLeft } from 'fp-ts/lib/Either';

import { IIllness, CreateIllness } from '../../domain';
import { IllnessRepository } from '../../infra/repositories';

export class Post {
  public constructor(
    private illnessRepository: IllnessRepository,
  ) { }

  public create(illness: IIllness) {
    const entity = CreateIllness.decode(illness);

    if (isLeft(entity)) {
      return Promise.reject(PathReporter.report(entity));
    }

    return this.illnessRepository.create(illness);
  }
}

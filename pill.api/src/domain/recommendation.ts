import * as t from 'io-ts';

const ExactRecommendation = t.type({
  name: t.string,
});

const PartialRecommendation  = t.partial({
  id: t.number,
});

export const Recommendation  = t.intersection([ExactRecommendation, PartialRecommendation]);

export type IRecommendation  = t.TypeOf<typeof Recommendation>;

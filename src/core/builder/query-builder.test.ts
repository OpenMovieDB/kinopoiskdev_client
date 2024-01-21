import { expect, test } from 'vitest';
import { QueryBuilder } from './query-builder';

const queryBuilder: QueryBuilder = new QueryBuilder();

test('Should select fields for number all', () => {
  const query = queryBuilder.build({
    isSeries: true,
    actor: 'Timberlake',
    'externalId.imdb': {
      $in: [200, 300, 400],
      $and: [501, 601, 701],
      $eq: 2000,
      $ne: 1001,
      $nin: [3001, 4001, 5001],
      $range: [new Date('2020-01-01'), new Date('2020-01-01')],
    },
  });

  expect(query).toBe('isSeries=true&actor=Timberlake&externalId.imdb=%2521200&externalId.imdb=%2521300&externalId.imdb=%2521400&externalId.imdb=%252B501&externalId.imdb=%252B601&externalId.imdb=%252B701&%24eq=2000&%24ne=%25211001&externalId.imdb=%25213001&externalId.imdb=%25214001&externalId.imdb=%25215001&externalId.imdb=2020-01-01-2020-01-01');
});

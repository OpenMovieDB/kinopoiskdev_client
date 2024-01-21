import { expect, test } from 'vitest';
import { QueryBuilder } from './query-builder';

const queryBuilder: QueryBuilder = new QueryBuilder();

test('Should select fields for number all', () => {
  const query = queryBuilder.build({
    'externalId.imdb': {
      $in: [200, 300, 400],
      $and: [501, 601, 701],
      $eq: 2000,
      $ne: 1001,
      $nin: [3001, 4001, 5001],
      $range: [new Date('2020-01-01'), new Date('2020-01-01')],
    },
  });

  expect(query).toBe('');
});

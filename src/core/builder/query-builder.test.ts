import { expect, test } from 'vitest';
import { QueryBuilder } from './query-builder';
import { SortType } from '@/interfaces/enums';

const queryBuilder: QueryBuilder = new QueryBuilder();

test('Should select fields for number all', () => {
  const query = queryBuilder.build({
    'externalId.imdb': {
      $in: [200, 300, 400],
      $and: [501, 601, 701],
      $eq: 2000,
      $ne: 1001,
      $nin: [3001, 4001, 5001],
      $range: [2020, 2023],
    },
  });

  expect(query).toBe('externalId.imdb=%2521200&externalId.imdb=%2521300&externalId.imdb=%2521400&externalId.imdb=%252B501&externalId.imdb=%252B601&externalId.imdb=%252B701&externalId.imdb=2000&externalId.imdb=%25211001&externalId.imdb=%25213001&externalId.imdb=%25214001&externalId.imdb=%25215001&externalId.imdb=2020-2023');
});

test('Should select fields for string all', () => {
  const query = queryBuilder.build({
    'externalId.imdb': {
      $and: ['test1', 'test2'],
      $eq: 'test3',
      $ne: 'test4',
      $nin: ['test5', 'test6', 'test7'],
    },
  });

  expect(query).toBe('externalId.imdb=%252Btest1&externalId.imdb=%252Btest2&externalId.imdb=test3&externalId.imdb=%2521test4&externalId.imdb=%2521test5&externalId.imdb=%2521test6&externalId.imdb=%2521test7');
});

test('Test sort prop', () => {
  const query = queryBuilder.build({
    sort: {
      'external.imdb': SortType.DESC,
      'external.kpHD': SortType.ASC,
      'external.foo': SortType.DESC,
      'foo': SortType.ASC,
      'boo': SortType.ASC,
    },
  });

  expect(query).toBe('sortField=external.imdb&sortType=-1&sortField=external.kpHD&sortType=1&sortField=external.foo&sortType=-1&sortField=foo&sortType=1&sortField=boo&sortType=1');
});

test.each([
  {
    label: 'Test string',
    val: 'SortType.DESC'
  },
  {
    label: 'Test number',
    val: 123
  },
  {
    label: 'Test boolean',
    val: false
  },
  {
    label: 'Test object',
    val: {}
  },
  {
    label: 'Test array',
    val: []
  },
  {
    label: 'Test NaN',
    val: NaN
  },
])('$label sort wrong value $val', ({ val }) => {
  expect(() => queryBuilder.build({
    sort: {
      'external.imdb': val,
    },
  })).toThrowError(/given/);
})


test('Check Date range for $range prop', () => {
  const query = queryBuilder.build({
    'externalId.imdb': {
      $range: [new Date('2020-01-01'), new Date('2020-01-01')],
    },
  });

  expect(query).toBe('externalId.imdb=2020-01-01-2020-01-01');

  const query2 = queryBuilder.build({
    'externalId.imdb': {
      $range: [2020, 2023],
    },
  });

  expect(query2).toBe('externalId.imdb=2020-2023');

  expect(() => queryBuilder.build({
    'externalId.imdb': {
      $range: [2020, new Date('2020-01-01')],
    },
  })).toThrowError(/externalId.imdb/);

  expect(() => queryBuilder.build({
    'externalId.imdb': {
      $range: [new Date('2020-01-01'), 2023],
    },
  })).toThrowError(/externalId.imdb/);
});

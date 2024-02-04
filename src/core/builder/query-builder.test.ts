import { expect, test } from 'vitest';
import { QueryBuilder } from './query-builder';
import { SortType } from '@/interfaces/enums';

test.each([
  {
    label: 'Test correct ASC',
    val: {
      external: SortType.ASC,
      external2: SortType.ASC,
    },
    rt: 'sortField=external&sortType=1&sortField=external2&sortType=1',
  },
  {
    label: 'Test correct DESC',
    val: {
      external: SortType.DESC,
      external2: SortType.DESC,
    },
    rt: 'sortField=external&sortType=-1&sortField=external2&sortType=-1',
  },
  {
    label: 'Test string',
    val: 'TEST',
    type: 'Error',
  },
  {
    label: 'Test number',
    val: 123,
    type: 'Error',
  },
  {
    label: 'Test boolean',
    val: false,
    type: 'Error',
  },
  {
    label: 'Test object',
    val: {},
    type: 'Error',
  },
  {
    label: 'Test array',
    val: [],
    type: 'Error',
  },
  {
    label: 'Test NaN',
    val: NaN,
    type: 'Error',
  },
])('$label in function sort wrong value $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() =>
      queryBuilder
        .sort({
          external: val,
        })
        .build(),
    ).toThrowError(/given/);
  } else {
    expect(queryBuilder.sort(val).build()).toBe(rt);
  }
});

test.each([
  {
    label: 'Test $range with correct date',
    val: [new Date('2020-01-01'), new Date('2020-01-01')],
    rt: 'external=2020-01-01-2020-01-01',
  },

  {
    label: 'Test $range with Date and Number',
    val: [new Date('2020-01-01'), 2023],
    type: 'Error',
  },

  {
    label: 'Test $range with Number and Date',
    val: [2023, new Date('2020-01-01')],
    type: 'Error',
  },

  {
    label: 'Test $range with Number and Number',
    val: [2023, 2023],
    rt: 'external=2023-2023',
  },

  {
    label: 'Test $range with undefined val',
    val: [undefined, undefined],
    type: 'Error',
  },

  {
    label: 'Test $range with String and Date',
    val: ['Test', new Date('2020-01-01')],
    type: 'Error',
  },

  {
    label: 'Test $range Float values',
    val: [8.4, 5.8],
    rt: 'external=8.4-5.8',
  },

  {
    label: 'Test $range Float and Date',
    val: [8.4, new Date('2020-01-01')],
    type: 'Error',
  },
])('$label function range  $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.range('external', val).build()).toThrowError(
      /given/,
    );
  } else {
    expect(queryBuilder.range('external', val).build()).toBe(rt);
  }
});

test.each([
  {
    label: 'Test $and with numbers',
    val: [
      {
        key: 'external',
        value: 100,
      },
      {
        key: 'external',
        value: 200,
      },
    ],
    rt: 'external=%2B100&external=%2B200',
  },
  {
    label: 'Test $and with strings',
    val: [
      {
        key: 'external',
        value: 'Test',
      },
      {
        key: 'external',
        value: 'Test',
      },
    ],
    rt: 'external=%2BTest&external=%2BTest',
  },
  {
    label: 'Test $and with error undefined',
    val: [
      {
        key: 'external',
        value: undefined,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and with error NaN',
    val: [
      {
        key: 'external',
        value: NaN,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and error object',
    val: [
      {
        key: 'external',
        value: {},
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and with error array',
    val: [
      {
        key: 'external',
        value: [],
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and with error Null',
    val: [
      {
        key: 'external',
        value: null,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and with error RegExp',
    val: [
      {
        key: 'external',
        value: new RegExp(/test/),
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $and with error boolean',
    val: [
      {
        key: 'external',
        value: true,
      },
    ],
    type: 'Error',
  },
])('$label function include $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.include(val).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.include(val).build()).toBe(rt);
  }
});

test.each([
  {
    label: 'Test $ne | $nin with numbers',
    val: [
      {
        key: 'external',
        value: 100,
      },
      {
        key: 'external',
        value: 200,
      },
    ],
    rt: 'external=%21100&external=%21200',
  },
  {
    label: 'Test $ne | $nin with strings',
    val: [
      {
        key: 'external',
        value: 'Test',
      },
      {
        key: 'external',
        value: 'Test',
      },
    ],
    rt: 'external=%21Test&external=%21Test',
  },
  {
    label: 'Test $ne | $nin with error undefined',
    val: [
      {
        key: 'external',
        value: undefined,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin with error NaN',
    val: [
      {
        key: 'external',
        value: NaN,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin error object',
    val: [
      {
        key: 'external',
        value: {},
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin with error array',
    val: [
      {
        key: 'external',
        value: [],
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin with error Null',
    val: [
      {
        key: 'external',
        value: null,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin with error RegExp',
    val: [
      {
        key: 'external',
        value: new RegExp(/test/),
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $ne | $nin with error boolean',
    val: [
      {
        key: 'external',
        value: true,
      },
    ],
    type: 'Error',
  },
])('$label function exclude $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.exclude(val).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.exclude(val).build()).toBe(rt);
  }
});


test.each([
  {
    label: 'Test select with numbers',
    val: [
      100,
      200
    ],
    type: 'Error',
  },
  {
    label: 'Test select with strings',
    val: [
      'Test1',
      'Test2'
    ],
    rt: 'selectFields=Test1&selectFields=Test2',
  },
  {
    label: 'Test select with error undefined',
    val: [
      undefined
    ],
    type: 'Error',
  },
  {
    label: 'Test select with error NaN',
    val: [
      NaN
    ],
    type: 'Error',
  },
  {
    label: 'Test select error object',
    val: [
      {}
    ],
    type: 'Error',
  },
  {
    label: 'Test select with error array',
    val: [
      []
    ],
    type: 'Error',
  },
  {
    label: 'Test select with error Null',
    val: [
      null
    ],
    type: 'Error',
  },
  {
    label: 'Test select with error RegExp',
    val: [
      new RegExp(/test/)
    ],
    type: 'Error',
  },
  {
    label: 'Test select with error boolean',
    val: [
      true
    ],
    type: 'Error',
  },
])('$label function select $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.select(val).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.select(val).build()).toBe(rt);
  }
});


test.each([
  {
    label: 'Test $in | $eq with numbers',
    val: [
      {
        key: 'external',
        value: 100,
      },
      {
        key: 'external',
        value: 200,
      },
    ],
    rt: 'external=100&external=200',
  },
  {
    label: 'Test $in | $eq with strings',
    val: [
      {
        key: 'external',
        value: 'Test',
      },
      {
        key: 'external',
        value: 'Test',
      },
    ],
    rt: 'external=Test&external=Test',
  },
  {
    label: 'Test $in | $eq with error undefined',
    val: [
      {
        key: 'external',
        value: undefined,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq with error NaN',
    val: [
      {
        key: 'external',
        value: NaN,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq error object',
    val: [
      {
        key: 'external',
        value: {},
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq with error array',
    val: [
      {
        key: 'external',
        value: [],
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq with error Null',
    val: [
      {
        key: 'external',
        value: null,
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq with error RegExp',
    val: [
      {
        key: 'external',
        value: new RegExp(/test/),
      },
    ],
    type: 'Error',
  },
  {
    label: 'Test $in | $eq with error boolean',
    val: [
      {
        key: 'external',
        value: true,
      },
    ],
    rt: 'external=true',
  },
])('$label function equal $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.equal(val).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.equal(val).build()).toBe(rt);
  }
});

test.each([
  {
    label: 'Test correct numbers',
    val: {
      page: 1,
      limit: 10
    },
    rt: 'page=1&limit=10',
  },
  {
    label: 'Test page undefined',
    val: {
      page: undefined,
    },
    rt: 'page=1&limit=10'
  },
  {
    label: 'Test page NaN',
    val: {
      page: NaN,
    },
    type: 'Error'
  },
  {
    label: 'Test limit undefined',
    val: {
      limit: undefined,
    },
    rt: 'page=1&limit=10'
  },
  {
    label: 'Test limit NaN',
    val: {
      limit: NaN,
    },
    type: 'Error'
  },
  {
    label: 'Test zero page',
    val: {
      page: 0,
    },
    type: 'Error'
  },
  {
    label: 'Test zero limit',
    val: {
      limit: 0,
    },
    type: 'Error'
  },
  {
    label: 'Test limit greater than 250',
    val: {
      limit: 251,
    },
    type: 'Error'
  },
  {
    label: 'Test page greater than 1000',
    val: {
      page: 1001,
    },
    rt: 'page=1001&limit=10',
  },
  {
    label: 'Test string page',
    val: {
      page: 'Test'
    },
    type: 'Error'
  },
  {
    label: 'Test string limit',
    val: {
      limit: 'Test'
    },
    type: 'Error'
  },
  {
    label: 'Test default params',
    val: {},
    rt: 'page=1&limit=10',
  },
])('$label function paginate $val', ({ val, type, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.paginate(val.page, val.limit).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.paginate(val.page, val.limit).build()).toBe(rt);
  }
});

test.each([
  {
    label: 'Test success query',
    val: {
      notNullFields: [
        'Test',
        100
      ],
      selectFields: ['123', '123'],
      isSeries: true,
      external: {
        $eq: 100,
        $ne: 100,
        $nin: [100],
        $range: [100, 100],
        $and: [100, 100],
      },
    },
    rt: 'notNullFields=Test&notNullFields=100&selectFields=123&selectFields=123&isSeries=true&external=100&external=%21100&external=%21100&external=100-100&external=%2B100&external=%2B100',
  },
])('$label function createQueryByProps', ({ type, val, rt }) => {
  const queryBuilder = new QueryBuilder();

  if (type === 'Error') {
    expect(() => queryBuilder.createQueryByProps(val).build()).toThrowError('must be');
  } else {
    expect(queryBuilder.createQueryByProps(val).build()).toBe(rt);
  }
});

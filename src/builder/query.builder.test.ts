import { SORT_TYPE } from '../enums/sort-type.enum';
import { QueryBuilder, MovieQueryBuilder } from './query.builder';

describe('QueryBuilder', () => {
  let queryBuilder: QueryBuilder<any>;

  beforeEach(() => {
    queryBuilder = new MovieQueryBuilder();
  });

  it('should construct a new instance', () => {
    expect(queryBuilder).toBeInstanceOf(QueryBuilder);
  });

  it('should select fields correctly', () => {
    queryBuilder.select(['field1', 'field2']);
    const query = queryBuilder.build();
    expect(query.selectFields).toEqual(['field1', 'field2']);
  });

  it('should sort fields correctly', () => {
    queryBuilder.sort('field1', SORT_TYPE.ASC);
    const query = queryBuilder.build();
    expect(query.sortField).toEqual(['field1']);
    expect(query.sortType).toEqual([SORT_TYPE.ASC]);
  });

  it('should filter fields correctly', () => {
    queryBuilder.filterExact('field1', 'test_value');
    const query = queryBuilder.build();
    expect(query['field1']).toEqual(['test_value']);
  });

  it('should handle range filter correctly', () => {
    queryBuilder.filterRange('field1', [1, 10]);
    const query = queryBuilder.build();
    expect(query['field1']).toEqual('1-10');
  });

  it('should handle date range filter correctly', () => {
    const date1 = new Date('2020-01-01');
    const date2 = new Date('2021-01-01');
    queryBuilder.filterDateRange('field1', [date1, date2]);
    const query = queryBuilder.build();
    expect(query['field1']).toEqual('2020-01-01-2021-01-01');
  });

  it('should paginate correctly', () => {
    queryBuilder.paginate(1, 10);
    const query = queryBuilder.build();
    expect(query.page).toEqual(1);
    expect(query.limit).toEqual(10);
  });
});

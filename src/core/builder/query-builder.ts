import { SortType } from '@/interfaces/enums';
import {
  IQueryBuilder,
  ParamsQuery,
  ParamsQueryWithSuffix,
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryPreSuffixes,
} from './query-fields.interface';
import { isString, isNumeric, isDate, isSimpleType } from '@/utils';

export class QueryBuilder<T = any> implements IQueryBuilder {
  private query = new URLSearchParams();

  private throwError(str: string) {
    throw new Error(str);
  }

  private appendToQuery(key: string, val: string | number | boolean) {
    this.query.append(key, String(val));
  }

  private setQueryField(key: string, val: string | number | boolean) {
    this.query.set(key, String(val));
  }

  private removeQueryField(key: string, val: string | number | boolean) {
    this.query.delete(key, String(val));
  }

  private addToQueryWithPreSuffix(
    params: ParamsQueryWithSuffix,
    suffix: QueryPreSuffixes = QueryPreSuffixes.empty,
  ) {
    params.forEach(item => {
      if (!isString(item.value) && !isNumeric(item.value)) {
        this.throwError(
          `${
            item.key
          }: ${typeof item.value} must be only number, string, boolean`,
        );
      }

      this.appendToQuery(item.key, `${suffix}${item.value}`);
    });
    return this;
  }

  public build() {
    return this.query.toString();
  }

  public createQueryByProps(params: T) {
    if (params) {
      if (params.sort) {
        this.sort(params.sort);
      }

      Object.keys(params).forEach(queryField => {
        if (Array.isArray(params[queryField])) {
          this.equal(
            (params[queryField] as (string | number)[]).map(item => ({
              key: queryField,
              value: item,
            })),
          );
        } else if (typeof params[queryField] === 'object') {
          Object.keys(params[queryField]).forEach(queryBuilderField => {
            const currentQueryBuilderField =
              params[queryField][queryBuilderField];

            switch (queryBuilderField) {
              case QueryBuilderFields.$ne:
                this.exclude([
                  {
                    key: queryField,
                    value: currentQueryBuilderField,
                  },
                ]);
                break;

              case QueryBuilderFields.$eq:
                this.equal([
                  {
                    key: queryField,
                    value: currentQueryBuilderField,
                  },
                ]);
                break;

              case QueryBuilderFields.$in:
                this.equal(
                  currentQueryBuilderField.map(value => ({
                    key: queryField,
                    value,
                  })),
                );
                break;

              case QueryBuilderFields.$and:
                this.include(
                  currentQueryBuilderField.map(value => ({
                    key: queryField,
                    value,
                  })),
                );
                break;

              case QueryBuilderFields.$nin:
                this.exclude(
                  currentQueryBuilderField.map(value => ({
                    key: queryField,
                    value,
                  })),
                );
                break;

              case QueryBuilderFields.$range:
                this.range(queryField, currentQueryBuilderField);
                break;
            }
          });
        } else {
          this.equal([
            {
              key: queryField,
              value: params[queryField] as string | number | boolean,
            },
          ]);
        }
      });
    }

    return this;
  }

  public remove(params: ParamsQuery) {
    params.forEach(item => {
      if (!isSimpleType(item.value)) {
        this.throwError(`${item.key}: ${typeof item} must be only string, number, boolean`);
      } else if (!this.query.has(item.key)) {
        this.throwError(`${item.key} doesn't exist in query`);
      }

      this.removeQueryField(item.key, item.value);
    });

    return this;
  }

  public select(params: string[]) {
    params.forEach(item => {
      if (!isString(item)) {
        this.throwError(`selectFields: ${typeof item} must be only string`);
      }

      this.appendToQuery('selectFields', item);
    });
    return this;
  }

  public paginate(page = 1, limit = 10) {
    if (!isNumeric(page)) {
      this.throwError('Page must be a number');
    } 
    
    if (page < 1) {
      this.throwError('Page must be greater than 0');
    } 
    
    if(!isNumeric(limit)) {
      this.throwError('Limit must be a number');
    }

    if(limit < 1 || limit > 250) {
      this.throwError('Limit must be greater than 0 and less than or equal to 250');
    }

    this.setQueryField('page', page || 1);
    this.setQueryField('limit', limit || 10);

    return this;
  }

  public sort(params: QueryBuilderFieldSort<string>) {
    Object.keys(params).forEach(queryField => {
      const currentParam = params[queryField] as SortType;

      if (![SortType.ASC, SortType.DESC].includes(currentParam)) {
        this.throwError(
          `${queryField}: ${currentParam} must be one of [${Object.values(
            SortType,
          )}], given ${currentParam}`,
        );
      }

      this.appendToQuery('sortField', queryField);
      this.appendToQuery('sortType', currentParam);
    });
    return this;
  }

  public equal(params: ParamsQuery) {
    params.forEach(item => {
      if (!isSimpleType(item.value)) {
        this.throwError(
          `${
            item.key
          }: ${typeof item.value} must be only number, boolean, string`,
        );
      }

      this.appendToQuery(item.key, item.value);
    });
    return this;
  }

  public include(params: ParamsQueryWithSuffix) {
    this.addToQueryWithPreSuffix(params, QueryPreSuffixes.include);
    return this;
  }

  public exclude(params: ParamsQueryWithSuffix) {
    this.addToQueryWithPreSuffix(params, QueryPreSuffixes.exclude);
    return this;
  }

  public range(key: string, params: [Date, Date] | [number, number]) {
    if (isDate(params?.[0]) && isDate(params?.[1])) {
      this.appendToQuery(
        key,
        params.map((date: Date) => date.toISOString().split('T')[0]).join('-'),
      );
    } else if (isNumeric(params?.[0]) && isNumeric(params?.[1])) {
      this.appendToQuery(
        key,
        params.map((date: number) => String(date)).join('-'),
      );
    } else {
      this.throwError(
        `${key}: ${params} must be an [Date, Date] or [Number, Number], given [${params?.[0]}, ${params?.[1]}]`,
      );
    }

    return this;
  }
}

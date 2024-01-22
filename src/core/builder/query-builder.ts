import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsType,
} from './query-fields.interface';

export class QueryBuilder {
  private fixedEncodeURIComponent(str: string) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  private throwError(str: string) {
    throw new Error(str);
  }

  private isDate(val: any) {
    return val instanceof Date;
  }

  private isNumeric(value: any) {
    return typeof value === "number" && !Number.isNaN(value);
  }

  build(
    params:
      | {
        [key: string]:
        | QueryBuilderFieldsType<string | number | boolean | Date>
        | QueryBuilderFieldSort<string>
        | string
        | number
        | boolean
        | (string | number)[];
      }
      | undefined = {},
  ) {
    const query = new URLSearchParams();

    const appendToQuery = (key: string, val: string | number | boolean) => {
      query.append(key, this.fixedEncodeURIComponent(String(val)));
    };

    if (!params) {
      return '';
    }

    Object.keys(params).forEach(queryField => {
      if (Array.isArray(params[queryField])) {
        (params[queryField] as (string | number)[]).forEach(item => {
          appendToQuery(queryField, item);
        });
      } else if (typeof params[queryField] === 'object') {
        Object.keys(params[queryField]).forEach(queryBuilderField => {
          const currentQueryBuilderField =
            params[queryField][queryBuilderField];

          if (queryField === 'sort') {
            appendToQuery(
              'sortField',
              queryBuilderField,
            );
            appendToQuery(
              'sortType',
              currentQueryBuilderField,
            );
          } else if (
            [QueryBuilderFields.$ne, QueryBuilderFields.$eq].includes(
              queryBuilderField as QueryBuilderFields,
            )
          ) {
            const suffix =
              QueryBuilderFields.$ne === queryBuilderField ? '!' : '';
            appendToQuery(
              queryBuilderField,
              `${suffix}${currentQueryBuilderField}`,
            );
          } else if (
            [
              QueryBuilderFields.$in,
              QueryBuilderFields.$and,
              QueryBuilderFields.$nin,
              QueryBuilderFields.$range,
            ].includes(queryBuilderField as QueryBuilderFields)
          ) {
            if (Array.isArray(currentQueryBuilderField)) {
              if (
                [
                  QueryBuilderFields.$in,
                  QueryBuilderFields.$and,
                  QueryBuilderFields.$nin,
                ].includes(queryBuilderField as QueryBuilderFields)
              ) {
                const suffix =
                  QueryBuilderFields.$and === queryBuilderField
                    ? '+'
                    : QueryBuilderFields.$nin
                      ? '!'
                      : '';
                currentQueryBuilderField.forEach(item => {
                  appendToQuery(queryField, `${suffix}${item}`);
                });
              } else if (QueryBuilderFields.$range === queryBuilderField) {
                if (
                  this.isDate(currentQueryBuilderField?.[0]) &&
                  this.isDate(currentQueryBuilderField?.[1])
                ) {
                  appendToQuery(
                    queryField,
                    currentQueryBuilderField
                      .map((date: Date) => date.toISOString().split('T')[0])
                      .join('-'),
                  );
                } else if (
                  this.isNumeric(currentQueryBuilderField?.[0]) &&
                  this.isNumeric(currentQueryBuilderField?.[1])
                ) {
                  appendToQuery(
                    queryField,
                    currentQueryBuilderField
                      .map((date: number) => String(date))
                      .join('-'),
                  );
                } else {
                  this.throwError(
                    `${queryField}: ${queryBuilderField} must be an [Date, Date] or [Number, Number], given [${currentQueryBuilderField?.[0]}, ${currentQueryBuilderField?.[1]}]`,
                  );
                }
              }
            } else {
              this.throwError(
                `${queryField}: ${queryBuilderField} must be an Array, given ${typeof currentQueryBuilderField}`,
              );
            }
          }
        });
      } else {
        appendToQuery(queryField, params[queryField] as string | number | boolean);
      }
    });

    return query.toString();
  }
}

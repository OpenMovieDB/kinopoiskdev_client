import { QueryBuilderFields, QueryBuilderFieldsType } from "./query-fields.interface";

export class QueryBuilder
{
  
  private fixedEncodeURIComponent (str: string) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }

  private throwError(str: string) {
    throw new Error(str)
  }

  build(params: { [key: string]: QueryBuilderFieldsType<string | number | boolean | Date> | string | number | (string | number)[] } | undefined = {}) {
    const query = new URLSearchParams()

    const appendToQuery = (key: string, val: string | number | boolean) => {
      query.append(key, this.fixedEncodeURIComponent(String(val)))
    }

    if (params) {
      return ''
    }

    Object.keys(params).forEach(queryField => {
      if (Array.isArray(params[queryField])) {
        params[queryField].forEach((item) => {
          appendToQuery(queryField, item)
        })
      } else if (typeof params[queryField] === 'object') {
        Object.keys(params[queryField]).forEach((queryBuilderField) => {
          const currentQueryBuilderField = params[queryField][queryBuilderField]
  
          if ([QueryBuilderFields.$ne, QueryBuilderFields.$eq].includes(queryBuilderField as QueryBuilderFields)) {
            appendToQuery(queryBuilderField, currentQueryBuilderField)
          } else {
            if (Array.isArray(currentQueryBuilderField)) {
              if (QueryBuilderFields.$in === queryBuilderField) {
                currentQueryBuilderField.forEach((item) => {
                  appendToQuery(queryField, item)
                })
              } else if (QueryBuilderFields.$and === queryBuilderField) {
                currentQueryBuilderField.forEach((item) => {
                  appendToQuery(queryField, `+${item}`)
                })
              } else if (QueryBuilderFields.$nin === queryBuilderField) {
                currentQueryBuilderField.forEach((item) => {
                  appendToQuery(queryField, `!${item}`)
                })
              } else if (QueryBuilderFields.$range === queryBuilderField) {
                appendToQuery(queryField, currentQueryBuilderField.map((date: Date) => date.toISOString().split('T')[0]).join('-'))
              }
            } else {
              this.throwError(`${queryField}: ${queryBuilderField} must be an Array, given ${typeof currentQueryBuilderField}`)
            }
          }
        })
      } else {
        appendToQuery(queryField, params[queryField])
      }
    })

    return query.toString()
  }

}

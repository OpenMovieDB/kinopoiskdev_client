export enum QueryBuilderFields {
  $in = '$in',
  $and = '$and',
  $ne = '$ne',
  $nin = '$nin',
  $range = '$range',
  $eq = '$eq',
}

export type QueryBuilderFieldsType<T> = {
  [QueryBuilderFields.$in]?: T[];
  [QueryBuilderFields.$and]?: T[];
  [QueryBuilderFields.$nin]?: T[];
  [QueryBuilderFields.$range]?: [T, T];
  [QueryBuilderFields.$eq]?: T;
  [QueryBuilderFields.$ne]?: T;
};

export type WrapperQueryBuilderFieldsType<
  T,
  Exclude extends QueryBuilderFields = never,
> = Omit<QueryBuilderFieldsType<T>, Exclude>;


export type WrapperQueryBuilderFieldsTypeDate =  WrapperQueryBuilderFieldsType<Date>
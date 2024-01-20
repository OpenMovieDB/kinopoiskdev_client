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
  [QueryBuilderFields.$ne]?: T[];
  [QueryBuilderFields.$and]?: T[];
  [QueryBuilderFields.$nin]?: T[];
  [QueryBuilderFields.$eq]?: T;
  [QueryBuilderFields.$range]?: [T, T];
};

export type WrapperQueryBuilderFieldsType<
  T,
  Exclude extends QueryBuilderFields = never,
> = Omit<QueryBuilderFieldsType<T>, Exclude>;

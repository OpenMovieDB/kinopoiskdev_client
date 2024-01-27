import { SortType } from "@/interfaces/enums";

export enum QueryBuilderFields {
  $in = '$in',
  $and = '$and',
  $ne = '$ne',
  $nin = '$nin',
  $range = '$range',
  $eq = '$eq',
}

export enum QueryPreSuffixes {
  include = '+',
  exclude = '!',
  empty = '',
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


export type QueryBuilderFieldsPageLimit<T> = Partial<{
  page: number;
  limit: number;
} & T>

export type QueryBuilderFieldSort<T extends string> = Partial<{
  [key in T]: SortType
}>

export type ParamsQueryWithSuffix<T = string> = {
  key: T;
  value: string | number;
}[];

export type ParamsQuery<T = string> = {
  key: T;
  value: string | number | boolean;
}[];


export interface IQueryBuilder {
  build(): string;
}

export type WrapperQueryBuilderFieldsTypeDate =  WrapperQueryBuilderFieldsType<Date>
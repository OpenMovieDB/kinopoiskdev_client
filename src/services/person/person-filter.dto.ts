import {
  QueryBuilderFieldSort,
  QueryBuilderFields,
  QueryBuilderFieldsPageLimit,
  WrapperQueryBuilderFieldsType,
  WrapperQueryBuilderFieldsTypeDate,
} from '@/core/builder/query-fields.interface';

type SelectPersonFields =
  | 'id'
  | 'name'
  | 'enName '
  | 'photo'
  | 'sex'
  | 'growth'
  | 'birthday'
  | 'death'
  | 'age'
  | 'birthPlace'
  | 'deathPlace'
  | 'spouses'
  | 'countAwards'
  | 'profession'
  | 'facts'
  | 'movies'
  | 'updatedAt'
  | 'createdAt';

type RequestPersonFields =
  | 'id'
  | 'name'
  | 'enName'
  | 'photo'
  | 'sex'
  | 'growth'
  | 'birthday'
  | 'death'
  | 'age'
  | 'birthPlace.value'
  | 'deathPlace.value'
  | 'spouses.id'
  | 'spouses.name'
  | 'spouses.divorced'
  | 'spouses.divorcedReason'
  | 'spouses.sex'
  | 'spouses.children'
  | 'spouses.relation'
  | 'countAwards'
  | 'profession.value'
  | 'facts.value'
  | 'movies.id'
  | 'movies.name'
  | 'movies.alternativeName'
  | 'movies.rating'
  | 'movies.general'
  | 'movies.description'
  | 'movies.enProfession'
  | 'updatedAt'
  | 'createdAt';

export type PersonDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestPersonFields[];
  sort: QueryBuilderFieldSort<RequestPersonFields>;
  selectFields: SelectPersonFields[];

  id: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  'movies.id': WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  sex: WrapperQueryBuilderFieldsType<
    'Женский' | 'Мужской',
    QueryBuilderFields.$range
  >;
  growth: WrapperQueryBuilderFieldsType<number>;
  birthday: WrapperQueryBuilderFieldsTypeDate;
  death: WrapperQueryBuilderFieldsTypeDate;
  age: WrapperQueryBuilderFieldsType<number>;
  'birthPlace.value': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'deathPlace.value': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'spouses.id': WrapperQueryBuilderFieldsType<
    number,
    QueryBuilderFields.$range
  >;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;

type SelectAwardsFields =
  | 'personId'
  | 'winning'
  | 'nomination'
  | 'updatedAt'
  | 'createdAt';

type RequestPersonAwardFields =
  | 'personId'
  | 'winning'
  | 'nomination.award.title'
  | 'nomination.award.year'
  | 'nomination.title'
  | 'updatedAt'
  | 'createdAt';

export type PersonAwardsDto = QueryBuilderFieldsPageLimit<{
  notNullFields: RequestPersonAwardFields[];
  sort: QueryBuilderFieldSort<RequestPersonAwardFields>;
  selectFields: SelectAwardsFields[];

  winning: boolean;
  personId: WrapperQueryBuilderFieldsType<number, QueryBuilderFields.$range>;
  'nomination.title': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'nomination.award.title': WrapperQueryBuilderFieldsType<
    string,
    QueryBuilderFields.$range
  >;
  'nomination.award.year': WrapperQueryBuilderFieldsType<number>;
  createdAt: WrapperQueryBuilderFieldsTypeDate;
  updatedAt: WrapperQueryBuilderFieldsTypeDate;
}>;

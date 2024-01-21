import { QueryBuilderFields, WrapperQueryBuilderFieldsType, WrapperQueryBuilderFieldsTypeDate } from '@/core/builder/query-fields.interface';
import { SortType } from '@/interfaces/enums';

type SelectPersonFields = 'id' | 'name' | 'enName ' | 'photo' | 'sex' | 'growth' | 'birthday' | 'death' | 'age' | 'birthPlace' | 'deathPlace' | 'spouses' | 'countAwards' | 'profession' | 'facts' | 'movies' | 'updatedAt' | 'createdAt'

enum RequestPersonFields {
  'id' = 'id',
  'name' = 'name',
  'enName' = 'enName',
  'photo' = 'photo',
  'sex' = 'sex',
  'growth' = 'growth',
  'birthday' = 'birthday',
  'death' = 'death',
  'age' = 'age',
  'birthPlaceValue' = 'birthPlace.value',
  'deathPlaceValue' = 'deathPlace.value',
  'spousesId' = 'spouses.id',
  'spouses.name' = 'spouses.name',
  'spousesDivorced' = 'spouses.divorced',
  'spouses.divorcedReason' = 'spouses.divorcedReason',
  'spousesSex' = 'spouses.sex',
  'spouses.children' = 'spouses.children',
  'spouses.relation' = 'spouses.relation',
  'countAwards' = 'countAwards',
  'professionValue' = 'profession.value',
  'facts.value' = 'facts.value',
  'moviesId' = 'movies.id',
  'movies.name' = 'movies.name',
  'movies.alternativeName' = 'movies.alternativeName',
  'moviesRating' = 'movies.rating',
  'movies.general' = 'movies.general',
  'movies.description' = 'movies.description',
  'moviesEnProfession' = 'movies.enProfession',
  'updatedAt' = 'updatedAt',
  'createdAt' = 'createdAt',
}

export type MovieAwardsDto = Partial<{
  notNullFields: RequestPersonFields[]
  sortField: RequestPersonFields[]
  selectFields: SelectPersonFields[];
  sortType: SortType;

  [RequestPersonFields.id]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestPersonFields.moviesId]: WrapperQueryBuilderFieldsType<number,
    QueryBuilderFields.$range
  >;
  [RequestPersonFields.sex]: WrapperQueryBuilderFieldsType<'Женский' | 'Мужской',
    QueryBuilderFields.$range
  >;
  [RequestPersonFields.growth]: WrapperQueryBuilderFieldsType<number>;
  [RequestPersonFields.birthday]: WrapperQueryBuilderFieldsTypeDate;
  [RequestPersonFields.death]: WrapperQueryBuilderFieldsTypeDate;
  [RequestPersonFields.age]: WrapperQueryBuilderFieldsType<number>;
  [RequestPersonFields.birthPlaceValue]: WrapperQueryBuilderFieldsType<string,
  QueryBuilderFields.$range
>;
  [RequestPersonFields.deathPlaceValue]: WrapperQueryBuilderFieldsType<string,
  QueryBuilderFields.$range
>
  [RequestPersonFields.spousesId]: WrapperQueryBuilderFieldsType<number,
  QueryBuilderFields.$range
>;
  [RequestPersonFields.updatedAt]: WrapperQueryBuilderFieldsTypeDate;
  [RequestPersonFields.createdAt]: WrapperQueryBuilderFieldsTypeDate;
}>
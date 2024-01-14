import { IQueryFields } from '@/core/builder/query-fields.interface';

export interface PersonFields extends IQueryFields {
  StringFields:
    | 'name'
    | 'enName'
    | 'photo'
    | 'sex'
    | 'birthPlace.value'
    | 'deathPlace.value'
    | 'spouses.name'
    | 'spouses.divorced'
    | 'spouses.divorcedReason'
    | 'spouses.sex'
    | 'spouses.children'
    | 'spouses.relation'
    | 'profession.value'
    | 'facts.value'
    | 'movies.name'
    | 'movies.alternativeName'
    | 'movies.description'
    | 'movies.enProfession';
  DateFields: 'birthday' | 'death';
  NumberFields:
    | 'id'
    | 'movies.id'
    | 'movies.rating'
    | 'age'
    | 'countAwards'
    | 'growth'
    | 'spouses.id'
    | 'spouses.children'
    | 'spouses.name';
  BooleanFields: never;
  ObjectFields:
    | 'movies'
    | 'spouses'
    | 'facts'
    | 'profession'
    | 'birthPlace'
    | 'deathPlace';
}

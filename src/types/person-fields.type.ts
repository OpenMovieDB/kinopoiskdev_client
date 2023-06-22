import { IQueryFields } from '../interfaces/query-fields.interface';

export interface PersonFields extends IQueryFields {
  StringFields: 'name' | 'enName';
  DateFields: 'deathPlace.value';
  NumberFields: 'id';
  BooleanFields: string;
}

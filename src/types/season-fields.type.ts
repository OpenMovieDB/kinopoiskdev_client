import { IQueryFields } from '../interfaces/query-fields.interface';

export interface SeasonFields extends IQueryFields {
  StringFields: 'episodes.name' | 'episodes.enName' | 'episodes.description';
  DateFields: 'episodes.date';
  NumberFields: 'movieId' | 'number' | 'episodesCount' | 'episodes.number';
  BooleanFields: never;
}

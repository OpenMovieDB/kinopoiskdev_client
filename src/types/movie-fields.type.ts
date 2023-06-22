import { IQueryFields } from '../interfaces/query-fields.interface';

export interface MovieFields extends IQueryFields {
  StringFields:
    | 'name'
    | 'alternativeName'
    | 'enName'
    | 'names.name'
    | 'tagline'
    | 'slogan'
    | 'description'
    | 'persons.name'
    | 'persons.enName'
    | 'persons.description';
  DateFields:
    | 'premiere.world'
    | 'premiere.russia'
    | 'premiere.digital'
    | 'premiere.bluray'
    | 'premiere.dvd';
  NumberFields:
    | 'id'
    | 'externalId.tmdb'
    | 'typeNumber'
    | 'movieLength'
    | 'year'
    | 'rating.kp'
    | 'rating.imdb'
    | 'rating.tmdb';
  BooleanFields: 'ticketsOnSale' | 'isSeries';
}

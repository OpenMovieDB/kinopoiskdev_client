import { PersonFields } from '../../types/person-fields.type';
import {
  Person,
  PersonDocsResponseDto,
  SearchPersonResponseDto,
  PersonAwardDocsResponseDto,
} from '../api.interface';
import { IPagination } from '../pagination.interface';
import { Filter, SearchFilter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface IPersonService {
  getById(id: number): Promise<IResponse<Person>>;
  getByFilters(
    filters: Filter<PersonFields>,
  ): Promise<IResponse<PersonDocsResponseDto>>;
  getBySearchQuery(
    filters: SearchFilter,
  ): Promise<IResponse<SearchPersonResponseDto>>;
  getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponse<PersonAwardDocsResponseDto>>;
}

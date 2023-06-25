import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import {
  Person,
  PersonAwardDocsResponseDto,
  PersonDocsResponseDto,
  SearchPersonResponseDto,
} from '../interfaces/api.interface';
import { VERSION } from '../enums/version.enum';
import { IPagination } from '../interfaces/pagination.interface';
import { Filter, SearchFilter } from '../interfaces/query-builder.interface';
import { PersonFields } from '../types/person-fields.type';
import { IPersonService } from '../interfaces/services/person-service.interface';
import { Pagination } from '../classes/pagination';

export class PersonService implements IPersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponse<Person>> {
    return await this.request.get(VERSION.V1, `/person/${id}`);
  }

  async getByFilters(
    filters: Filter<PersonFields>,
  ): Promise<IResponse<PersonDocsResponseDto>> {
    return await this.request.get(VERSION.V1, `/person`, filters);
  }

  async getBySearchQuery(
    filters: SearchFilter,
  ): Promise<IResponse<SearchPersonResponseDto>> {
    return await this.request.get(VERSION.V1_2, `/person/search`, filters);
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponse<PersonAwardDocsResponseDto>> {
    return await this.request.get(VERSION.V1_1, `/movie/awards`, filters);
  }
}

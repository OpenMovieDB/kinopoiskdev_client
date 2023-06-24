import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import {
  Person,
  PersonAwardDocsResponseDto,
  PersonDocsResponseDto,
  SearchPersonResponseDto,
} from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';
import { IPagination } from '../interfaces/pagination.interface';
import { Filter } from '../interfaces/query-builder.interface';
import { PersonFields } from '../types/person-fields.type';

export class PersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponse<Person>> {
    return await this.request.get(VERSIONS.V1, `/person/${id}`);
  }

  async getByFilters(
    filters: Filter<PersonFields>,
  ): Promise<IResponse<PersonDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/person`, filters);
  }

  async getBySearchQuery(
    query: string,
  ): Promise<IResponse<SearchPersonResponseDto>> {
    return await this.request.get(VERSIONS.V1_2, `/person/search`, {
      query,
    });
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponse<PersonAwardDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1_1, `/movie/awards`, filters);
  }
}

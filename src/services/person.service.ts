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

export class PersonService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponse<Person>> {
    return await this.request.get(VERSIONS.V1, `/person/${id}`);
  }

  async getByFilters(
    filters: Record<string, string>,
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

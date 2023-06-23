import { ClientRequest } from '../client-request';
import {
  MovieAwardDocsResponseDto,
  MovieDocsResponseDtoV13,
  MovieDtoV13,
  PossibleValueDto,
  SearchMovieResponseDto,
} from '../interfaces/api.interface';
import { IPagination } from '../interfaces/pagination.interface';
import { VERSIONS } from '../enums/version.enum';
import { IResponse } from '../interfaces/response.interface';

export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponse<MovieDtoV13>> {
    return await this.request.get(VERSIONS.V1_3, `/movie/${id}`);
  }

  async getRandom(): Promise<IResponse<MovieDtoV13>> {
    return await this.request.get(VERSIONS.V1_3, `/movie/random`);
  }

  async getByFilters(
    filters: Record<string, string>,
  ): Promise<IResponse<MovieDocsResponseDtoV13>> {
    return await this.request.get(VERSIONS.V1_3, `/movie`, filters);
  }

  async getBySearchQuery(
    query: string,
  ): Promise<IResponse<SearchMovieResponseDto>> {
    return await this.request.get(VERSIONS.V1_2, `/movie/search`, {
      query,
    });
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponse<MovieAwardDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1_1, `/movie/awards`, filters);
  }

  getPossibleValuesByField(
    field: string,
  ): Promise<IResponse<PossibleValueDto[]>> {
    return this.request.get(VERSIONS.V1, `/movie/possibleValues`, {
      field,
    });
  }
}

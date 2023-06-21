import { ClientRequest } from '../client-request';
import {
  MeiliMovieEntity,
  MovieDocsResponseDtoV13,
  MovieDtoV13,
  PossibleValueDto,
  SearchMovieResponseDto,
} from '../interfaces/api.interface';
import { IPagination } from '../interfaces/pagination.interface';
import { Pagination } from '../classes/pagination';
import { VERSIONS } from '../enums/version.enum';

export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<MovieDtoV13> {
    return await this.request.get(VERSIONS.V1_3, `/movie/${id}`);
  }

  async getRandom(): Promise<MovieDtoV13> {
    return await this.request.get(VERSIONS.V1_3, `/movie/random`);
  }

  async getByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<MovieDocsResponseDtoV13> {
    const pagination = new Pagination(paginationParams);

    return await this.request.get(VERSIONS.V1_3, `/movie`, {
      ...filters,
      ...pagination,
    });
  }

  async getBySearchQuery(
    query: string,
    paginationParams?: IPagination,
  ): Promise<SearchMovieResponseDto> {
    const pagination = new Pagination(paginationParams);

    return await this.request.get(VERSIONS.V1_2, `/movie/search`, {
      query,
      ...pagination,
    });
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<MovieDocsResponseDtoV13> {
    const pagination = new Pagination(paginationParams);

    return await this.request.get(VERSIONS.V1_1, `/movie/awards`, {
      ...filters,
      ...pagination,
    });
  }

  getPossibleValuesByField(field: string): Promise<PossibleValueDto[]> {
    return this.request.get(VERSIONS.V1, `/movie/possibleValues`, {
      field,
    });
  }
}

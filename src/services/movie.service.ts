import { ClientRequest } from '../client-request';
import {
  MeiliMovieEntity,
  MovieDocsResponseDtoV13,
  MovieDtoV13,
  PossibleValueDto,
  SearchMovieResponseDto,
} from '../interfaces/api.interface';
import { IPagination } from '../interfaces/pagination.interface';
import { VERSIONS } from '../enums/version.enum';
import { IResponseError } from '../interfaces/error.interface';

export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponseError | MovieDtoV13> {
    return await this.request.get(VERSIONS.V1_3, `/movie/${id}`);
  }

  async getRandom(): Promise<IResponseError | MovieDtoV13> {
    return await this.request.get(VERSIONS.V1_3, `/movie/random`);
  }

  async getByFilters(
    filters: Record<string, string>,
  ): Promise<IResponseError | MovieDocsResponseDtoV13> {
    return await this.request.get(VERSIONS.V1_3, `/movie`, filters);
  }

  async getBySearchQuery(
    query: string,
  ): Promise<IResponseError | SearchMovieResponseDto> {
    return await this.request.get(VERSIONS.V1_2, `/movie/search`, {
      query,
    });
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponseError | MovieDocsResponseDtoV13> {
    return await this.request.get(VERSIONS.V1_1, `/movie/awards`, filters);
  }

  getPossibleValuesByField(
    field: string,
  ): Promise<IResponseError | PossibleValueDto[]> {
    return this.request.get(VERSIONS.V1, `/movie/possibleValues`, {
      field,
    });
  }
}

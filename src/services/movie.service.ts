import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import {
  MeiliMovieEntity,
  MovieDtoV14,
  PartialTypeClass,
  PossibleValueDto,
  WrapperDocsResponseDto,
} from '../interfaces';
import { Filter, SearchFilter } from '../interfaces/query-builder.interface';
import { MovieFields } from '../interfaces/services/movie/movie-fields.type';

export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/${id}`);
  }

  async getRandom(): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/random`);
  }

  async getByFilters(
    filters: Filter<MovieFields>,
  ): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14, typeof filters>(VERSION.V1_4, `/movie`, filters);
  }

  async getBySearchQuery(
    filters: SearchFilter,
  ): Promise<WrapperDocsResponseDto<MeiliMovieEntity>> {
    return await this.request.get<MeiliMovieEntity, typeof filters>(VERSION.V1_4, `/movie/search`, filters);
  }

  async getAwardsByFilters(
    filters: Record<string, string>,
  ): Promise<WrapperDocsResponseDto<PartialTypeClass>> {
    return await this.request.get<PartialTypeClass, typeof filters>(VERSION.V1_4, `/movie/awards`, filters);
  }

  getPossibleValuesByField(
    field: string,
  ): Promise<WrapperDocsResponseDto<PossibleValueDto>> {
    return this.request.get<PossibleValueDto>(VERSION.V1, `/movie/possible-values-by-field`, {
      field,
    });
  }
}

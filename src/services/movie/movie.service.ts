import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { MovieAwardsDto, MovieDto } from './movie-filter.dto';
import { MeiliMovieEntity, MovieDtoV14, PartialTypeClass, PossibleValueDto } from './movie-response.interface';
import { QueryBuilderFieldsPageLimit } from '@/core/builder/query-fields.interface';
import { QueryBuilder } from '@/core/builder/query-builder';
export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/${id}`);
  }

  async getRandom(): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/random`);
  }

  async getByFilters(
    filters: QueryBuilder<MovieDto>,
  ): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14, typeof filters>(VERSION.V1_4, `/movie`, filters);
  }

  async getBySearchQuery(
    filters: QueryBuilder<QueryBuilderFieldsPageLimit<{
      query: string;
    }>>,
  ): Promise<WrapperDocsResponseDto<MeiliMovieEntity>> {
    return await this.request.get<MeiliMovieEntity, typeof filters>(VERSION.V1_4, `/movie/search`, filters);
  }

  async getAwardsByFilters(
    filters: QueryBuilder<MovieAwardsDto>,
  ): Promise<WrapperDocsResponseDto<PartialTypeClass>> {
    return await this.request.get<PartialTypeClass, typeof filters>(VERSION.V1_4, `/movie/awards`, filters);
  }

  getPossibleValuesByField(
    filters: QueryBuilder<{ field : 'type' | 'countries.name' | 'genres.name' | 'typeNumber' | 'status'}>,
  ): Promise<WrapperDocsResponseDto<PossibleValueDto>> {
    return this.request.get<PossibleValueDto>(VERSION.V1, `/movie/possible-values-by-field`, {
      filters,
    });
  }
}

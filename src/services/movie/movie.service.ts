import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { MovieAwardsDto, MovieDto } from './movie-filter.dto';
import { MeiliMovieEntity, MovieDtoV14, PartialTypeClass, PossibleValueDto } from './movie-response.dto';
export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/${id}`);
  }

  async getRandom(): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14>(VERSION.V1_4, `/movie/random`);
  }

  async getByFilters(
    filters: MovieDto,
  ): Promise<WrapperDocsResponseDto<MovieDtoV14>> {
    return await this.request.get<MovieDtoV14, typeof filters>(VERSION.V1_4, `/movie`, filters);
  }

  async getBySearchQuery(
    filters: Partial<{
      page: number;
      limit: number;
      query: string;
    }>,
  ): Promise<WrapperDocsResponseDto<MeiliMovieEntity>> {
    return await this.request.get<MeiliMovieEntity, typeof filters>(VERSION.V1_4, `/movie/search`, filters);
  }

  async getAwardsByFilters(
    filters: MovieAwardsDto,
  ): Promise<WrapperDocsResponseDto<PartialTypeClass>> {
    return await this.request.get<PartialTypeClass, typeof filters>(VERSION.V1_4, `/movie/awards`, filters);
  }

  getPossibleValuesByField(
    filters: { field : 'type' | 'countries.name' | 'genres.name' | 'typeNumber' | 'status'},
  ): Promise<WrapperDocsResponseDto<PossibleValueDto>> {
    return this.request.get<PossibleValueDto>(VERSION.V1, `/movie/possible-values-by-field`, {
      filters,
    });
  }
}
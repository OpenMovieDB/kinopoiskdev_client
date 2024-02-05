import { ClientRequest } from '@/core/request/client-request';
import { MovieAwardsDto, MovieDto } from './movie-filter.dto';
import {
  MeiliMovieEntity,
  MovieDtoV14,
  PartialTypeClass,
  PossibleValueDto,
} from './movie-response.interface';
import {
  IQueryBuilder,
  QueryBuilderFieldsPageLimit,
} from '@/core/builder/query-fields.interface';
import { DocsResponse } from '@/interfaces/response/response.interface';
import { VERSION } from '@/interfaces/enums';

export class MovieService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number) {
    return await this.request.get<unknown, MovieDtoV14>(
      VERSION.V1_4,
      `/movie/${id}`,
    );
  }

  async getRandom() {
    return await this.request.get<unknown, MovieDtoV14>(
      VERSION.V1_4,
      `/movie/random`,
    );
  }

  async getByFilters(filters: MovieDto | IQueryBuilder<MovieDto>) {
    return await this.request.get<typeof filters, DocsResponse<MovieDtoV14>>(
      VERSION.V1_4,
      `/movie`,
      filters,
    );
  }

  async getBySearchQuery(
    filters:
      | QueryBuilderFieldsPageLimit<{
          query: string;
        }>
      | IQueryBuilder<
          QueryBuilderFieldsPageLimit<{
            query: string;
          }>
        >,
  ) {
    return await this.request.get<
      typeof filters,
      DocsResponse<MeiliMovieEntity>
    >(VERSION.V1_4, `/movie/search`, filters);
  }

  async getAwardsByFilters(
    filters: MovieAwardsDto | IQueryBuilder<MovieAwardsDto>,
  ) {
    return await this.request.get<
      typeof filters,
      DocsResponse<PartialTypeClass>
    >(VERSION.V1_4, `/movie/awards`, filters);
  }

  async getPossibleValuesByField(
    filters:
      | {
          field:
            | 'type'
            | 'countries.name'
            | 'genres.name'
            | 'typeNumber'
            | 'status';
        }
      | IQueryBuilder<{
          field:
            | 'type'
            | 'countries.name'
            | 'genres.name'
            | 'typeNumber'
            | 'status';
        }>,
  ) {
    return await this.request.get<
      typeof filters,
      DocsResponse<PossibleValueDto>
    >(VERSION.V1, `/movie/possible-values-by-field`, filters);
  }
}

import { MovieFields } from '../../types/movie-fields.type';
import {
  MovieDtoV13,
  MovieDocsResponseDtoV13,
  SearchMovieResponseDto,
  MovieAwardDocsResponseDto,
  PossibleValueDto,
} from '../api.interface';
import { IPagination } from '../pagination.interface';
import { Filter, SearchFilter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface IMovieService {
  getById(id: number): Promise<IResponse<MovieDtoV13>>;
  getRandom(): Promise<IResponse<MovieDtoV13>>;
  getByFilters(
    filters: Filter<MovieFields>,
  ): Promise<IResponse<MovieDocsResponseDtoV13>>;
  getBySearchQuery(
    filters: SearchFilter,
  ): Promise<IResponse<SearchMovieResponseDto>>;
  getAwardsByFilters(
    filters: Record<string, string>,
    paginationParams?: IPagination,
  ): Promise<IResponse<MovieAwardDocsResponseDto>>;
  getPossibleValuesByField(
    field: string,
  ): Promise<IResponse<PossibleValueDto[]>>;
}

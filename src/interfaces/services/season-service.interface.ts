import { SeasonFields } from '../../types/season-fields.type';
import { SeasonDocsResponseDto } from '../api.interface';
import { Filter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface ISeasonService {
  getByFilters(
    filters: Filter<SeasonFields>,
  ): Promise<IResponse<SeasonDocsResponseDto>>;
}

import { StudioFields } from '../../types/studio-fields.type';
import { Studio, StudioDocsResponseDto } from '../api.interface';
import { Filter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface IStudioService {
  getById(id: number): Promise<IResponse<Studio>>;
  getByFilters(
    filters: Filter<StudioFields>,
  ): Promise<IResponse<StudioDocsResponseDto>>;
}

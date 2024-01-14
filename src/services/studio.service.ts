import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { Studio, WrapperDocsResponseDto } from '../interfaces';
import { Filter } from '../interfaces/query-builder.interface';
import { StudioFields } from '../interfaces/services/studio/studio-fields.type';

export class StudioService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<StudioFields>,
  ): Promise<WrapperDocsResponseDto<Studio>> {
    return await this.request.get<Studio, typeof filters>(VERSION.V1_4, `/studio`, filters);
  }
}

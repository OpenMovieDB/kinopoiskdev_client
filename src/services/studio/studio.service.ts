import { ClientRequest } from '../../core/request/client-request';
import { VERSION } from '../../interfaces/enums/version.enum';
import { Filter } from '../../core/builder/query-builder.interface';
import { StudioFields } from './studio-fields.type';
import { WrapperDocsResponseDto } from '../../interfaces/response/response.interface';
import { Studio } from './studio-response.interface';

export class StudioService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<StudioFields>,
  ): Promise<WrapperDocsResponseDto<Studio>> {
    return await this.request.get<Studio, typeof filters>(VERSION.V1_4, `/studio`, filters);
  }
}

import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Filter } from '@/core/builder/query-builder.interface';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { SeasonFields } from './season-fields.dto';
import { Season } from './season-response.dto';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<SeasonFields>,
  ): Promise<WrapperDocsResponseDto<Season>> {
    return await this.request.get<Season, typeof filters>(VERSION.V1_4, `/season`, filters);
  }
}

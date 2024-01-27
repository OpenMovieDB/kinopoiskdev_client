import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { WrapperDocsResponseDto } from '@/interfaces/response/response.interface';
import { Season } from './season-response.interface';
import { SeasonDto } from './season-filter.dto';
import { QueryBuilder } from '@/core/builder/query-builder';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: QueryBuilder<SeasonDto>,
  ): Promise<WrapperDocsResponseDto<Season>> {
    return await this.request.get<Season>(VERSION.V1_4, `/season`, filters);
  }
}

import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { Season } from './season-response.interface';
import { SeasonDto } from './season-filter.dto';
import { IQueryBuilder } from '@/core/builder/query-fields.interface';
import { DocsResponse } from '@/interfaces/response/response.interface';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(filters: SeasonDto | IQueryBuilder<SeasonDto>) {
    return await this.request.get<typeof filters, DocsResponse<Season>>(
      VERSION.V1_4,
      `/season`,
      filters,
    );
  }
}

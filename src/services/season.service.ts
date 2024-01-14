import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { Season, WrapperDocsResponseDto } from '../interfaces';
import { Filter } from '../interfaces/query-builder.interface';
import { SeasonFields } from '../interfaces/services/season/season-fields.type';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<SeasonFields>,
  ): Promise<WrapperDocsResponseDto<Season>> {
    return await this.request.get<Season, typeof filters>(VERSION.V1_4, `/season`, filters);
  }
}

import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { SeasonDocsResponseDto } from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { SeasonFields } from '../types/season-fields.type';

export class SeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<SeasonFields>,
  ): Promise<IResponse<SeasonDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/season`, filters);
  }
}

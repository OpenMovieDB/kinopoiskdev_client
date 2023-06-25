import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { SeasonDocsResponseDto } from '../interfaces/api.interface';
import { VERSION } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { SeasonFields } from '../types/season-fields.type';
import { ISeasonService } from '../interfaces/services/season-service.interface';

export class SeasonService implements ISeasonService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<SeasonFields>,
  ): Promise<IResponse<SeasonDocsResponseDto>> {
    return await this.request.get(VERSION.V1, `/season`, filters);
  }
}

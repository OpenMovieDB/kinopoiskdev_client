import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { Studio, StudioDocsResponseDto } from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { StudioFields } from '../types/studio-fields.type';

export class StudioService {
  constructor(private readonly request: ClientRequest) {}

  async getById(id: number): Promise<IResponse<Studio>> {
    return await this.request.get(VERSIONS.V1, `/studio/${id}`);
  }
  async getByFilters(
    filters: Filter<StudioFields>,
  ): Promise<IResponse<StudioDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/studio`, filters);
  }
}

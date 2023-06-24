import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { KeywordDocsResponseDto } from '../interfaces/api.interface';
import { VERSIONS } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { KeywordFields } from '../types/keyword-fields.type';

export class KeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<KeywordFields>,
  ): Promise<IResponse<KeywordDocsResponseDto>> {
    return await this.request.get(VERSIONS.V1, `/keyword`, filters);
  }
}

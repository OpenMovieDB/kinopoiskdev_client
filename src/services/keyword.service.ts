import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { KeywordDocsResponseDto } from '../interfaces/api.interface';
import { VERSION } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { KeywordFields } from '../types/keyword-fields.type';
import { IKeywordService } from '../interfaces/services/keyword-service.interface';

export class KeywordService implements IKeywordService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<KeywordFields>,
  ): Promise<IResponse<KeywordDocsResponseDto>> {
    return await this.request.get(VERSION.V1, `/keyword`, filters);
  }
}

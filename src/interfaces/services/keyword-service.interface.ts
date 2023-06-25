import { KeywordFields } from '../../types/keyword-fields.type';
import { KeywordDocsResponseDto } from '../api.interface';
import { Filter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface IKeywordService {
  getByFilters(
    filters: Filter<KeywordFields>,
  ): Promise<IResponse<KeywordDocsResponseDto>>;
}

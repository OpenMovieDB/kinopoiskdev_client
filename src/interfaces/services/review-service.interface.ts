import { ReviewFields } from '../../types/review-fields.type';
import { ReviewDocsResponseDto } from '../api.interface';
import { Filter } from '../query-builder.interface';
import { IResponse } from '../response.interface';

export interface IReviewService {
  getByFilters(
    filters: Filter<ReviewFields>,
  ): Promise<IResponse<ReviewDocsResponseDto>>;
}

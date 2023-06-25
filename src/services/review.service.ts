import { ClientRequest } from '../client-request';
import { IResponse } from '../interfaces/response.interface';
import { ReviewDocsResponseDto } from '../interfaces/api.interface';
import { VERSION } from '../enums/version.enum';
import { Filter } from '../interfaces/query-builder.interface';
import { ReviewFields } from '../types/review-fields.type';
import { IReviewService } from '../interfaces/services/review-service.interface';

export class ReviewService implements IReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<ReviewFields>,
  ): Promise<IResponse<ReviewDocsResponseDto>> {
    return await this.request.get(VERSION.V1, `/review`, filters);
  }
}

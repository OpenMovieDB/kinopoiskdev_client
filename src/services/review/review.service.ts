import { ClientRequest } from '@/core/request/client-request';
import { VERSION } from '@/interfaces/enums/version.enum';
import { DocsResponse } from '@/interfaces/response/response.interface';
import { Review } from './review-response.interface';
import { ReviewDto } from './review-filter.dto';
import { IQueryBuilder } from '@/core/builder/query-fields.interface';

export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(filters: ReviewDto | IQueryBuilder<ReviewDto>) {
    return await this.request.get<typeof filters, DocsResponse<Review>>(
      VERSION.V1_4,
      `/review`,
      filters,
    );
  }
}

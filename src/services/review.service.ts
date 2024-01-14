import { ClientRequest } from '../client-request';
import { VERSION } from '../enums/version.enum';
import { Review, WrapperDocsResponseDto } from '../interfaces';
import { Filter } from '../interfaces/query-builder.interface';
import { ReviewFields } from '../interfaces/services/review/review-fields.type';

export class ReviewService {
  constructor(private readonly request: ClientRequest) {}

  async getByFilters(
    filters: Filter<ReviewFields>,
  ): Promise<WrapperDocsResponseDto<Review>> {
    return await this.request.get<Review, typeof filters>(VERSION.V1_4, `/review`, filters);
  }
}

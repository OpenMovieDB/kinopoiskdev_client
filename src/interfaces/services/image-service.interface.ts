import { ClientRequest } from '../../client-request';
import { IResponse } from '../response.interface';
import { ImageDocsResponseDto } from '../api.interface';

export interface IImageService {
  getByFilters(
    filters: Record<string, string>,
  ): Promise<IResponse<ImageDocsResponseDto>>;
}

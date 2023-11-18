import { IResponse } from '../response.interface';
import { ImageRequestV1_4 } from '../dto/image/image-request.dto';
import { ImageDocsResponseDtoV1_4 } from '../dto/image/image-docs-response.dto';

export interface IImageService {
  getByFilters(
    filters:  ImageRequestV1_4 | Record<string, string>,
  ): Promise<IResponse<ImageDocsResponseDtoV1_4>>
}

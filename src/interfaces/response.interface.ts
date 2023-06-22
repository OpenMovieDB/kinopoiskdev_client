import { MovieService } from '../services/movie.service';
import { SeasonService } from '../services/season.service';
import { PersonService } from '../services/person.service';
import { ReviewService } from '../services/review.service';
import { KeywordService } from '../services/keyword.service';
import { StudioService } from '../services/studio.service';
import { ImageService } from '../services/image.service';
import { ClientRequest } from '../client-request';
import { IResponseError } from './error.interface';

export interface IResponse<T> extends IResponseError {
  data: T | null;
}

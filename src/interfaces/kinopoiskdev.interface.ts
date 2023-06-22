import { MovieService } from '../services/movie.service';
import { SeasonService } from '../services/season.service';
import { PersonService } from '../services/person.service';
import { ReviewService } from '../services/review.service';
import { KeywordService } from '../services/keyword.service';
import { StudioService } from '../services/studio.service';
import { ImageService } from '../services/image.service';
import { ClientRequest } from '../client-request';

export interface IKinopoiskDev {
  movie: MovieService;
  season: SeasonService;
  person: PersonService;
  review: ReviewService;
  keyword: KeywordService;
  studio: StudioService;
  image: ImageService;
  request: ClientRequest;
}

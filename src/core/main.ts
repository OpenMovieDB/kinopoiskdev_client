import { ReviewService } from '@/services/review/review.service';
import { SeasonService } from '@/services/season/season.service';
import { MovieService } from '@/services/movie/movie.service';
import { PersonService } from '@/services/person/person.service';
import { KeywordService } from '@/services/keyword/keyword.service';
import { ImageService } from '@/services/image/image.service';
import { StudioService } from '@/services/studio/studio.service';
import { ClientRequest } from './request/client-request';

export class KinopoiskDev {
  public movie: MovieService;
  public season: SeasonService;
  public person: PersonService;
  public review: ReviewService;
  public keyword: KeywordService;
  public studio: StudioService;
  public image: ImageService;
  public request: ClientRequest;

  constructor(
    private readonly API_KEY: string,
    private readonly API_URL: string = 'https://api.kinopoisk.dev',
  ) {
    this.request = new ClientRequest(this.API_KEY, this.API_URL);
    this.movie = new MovieService(this.request);
    this.season = new SeasonService(this.request);
    this.person = new PersonService(this.request);
    this.keyword = new KeywordService(this.request);
    this.studio = new StudioService(this.request);
    this.image = new ImageService(this.request);
    this.review = new ReviewService(this.request);
  }
}

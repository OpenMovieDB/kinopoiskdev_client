import {
  KinopoiskDev,
  MovieQueryBuilder,
  SPECIAL_VALUE,
  SORT_TYPE,
  Filter,
  MovieFields,
} from '@openmoviedb/kinopoiskdev_ts_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

// Получение списка фильмов за 2020-2023 годы с рейтингом от 7.5 до 10, у которых есть постер
// Этот пример использует query builder
const getRelatedByQueryBuilderMovies = async () => {
  // Создаем билдер запросов для фильмов
  const queryBuilder = new MovieQueryBuilder();

  // Выбираем поля, которые мы хотим получить в ответе
  // Полный список полей можно посмотреть в документации
  // https://api.kinopoisk.dev/v1/documentation для метода /v1.3/movie
  const query = queryBuilder
    .select(['id', 'name', 'rating', 'poster', 'year'])
    // Добавляем фильтр поиска по указанному диапазону года
    .filterRange('year', [2020, 2023])
    // Добавляем фильтр поиска по указанному диапазону рейтинга
    .filterRange('rating.kp', [7.5, 10])
    // Добавляем фильтр для поиска фильмов с постером
    .filterExact('poster.url', SPECIAL_VALUE.NOT_NULL)
    // Добавляем сортировку по рейтингу
    .sort('rating.kp', SORT_TYPE.DESC)
    // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
    .paginate(1, 10)
    // Собираем запрос
    .build();

  // Отправляем запрос на получение фильмов
  const { data, error, message } = await kp.movie.getByFilters(query);

  if (data) {
    const { docs, page, limit } = data;
    console.log(`Страница ${page} из ${limit}`);
    console.log(docs);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Этот пример без использования query builder. Объект для запроса создается вручную на основе документации API
const getRelatedWithoutQueryBuilderMovies = async () => {
  const query: Filter<MovieFields> = {
    // Выбираем поля, которые мы хотим получить в ответе
    selectFields: ['id', 'name', 'rating', 'poster', 'year'],
    // Добавляем фильтр поиска по указанному диапазону года
    year: '2020-2023',
    // Добавляем фильтр поиска по указанному диапазону рейтинга
    'rating.kp': '7.5-10',
    // Добавляем фильтр для поиска фильмов с постером
    'poster.url': '!null',
    // Добавляем сортировку по рейтингу
    sortField: 'rating.kp',
    sortType: '-1',
    // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
    page: 1,
    limit: 10,
  };

  // Отправляем запрос на получение фильмов
  const { data, error, message } = await kp.movie.getByFilters(query);

  if (data) {
    const { docs, page, limit } = data;
    console.log(`Страница ${page} из ${limit}`);
    console.log(docs);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получение фильма по id
const getMovieById = async () => {
  const { data, error, message } = await kp.movie.getById(666);

  if (data) {
    console.log(data);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получить рандомный фильм с использованием стандартного метода
// Вернутся все поля фильма как в методе getById
const getRandomMovie = async () => {
  const { data, error, message } = await kp.movie.getRandom();

  if (data) {
    console.log(data);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получить рандомный фильм с указанными фильтрами
// Вернутся только указанные поля фильма или поля по умолчанию, если ничего не указано
const getRandomMovieWithFilters = async () => {
  // Создаем билдер запросов для фильмов
  const queryBuilder = new MovieQueryBuilder();

  // Выбираем поля, которые мы хотим получить в ответе
  const baseQuery = queryBuilder
    .select(['id', 'name', 'rating', 'poster', 'year'])
    // Добавляем фильтр для поиска фильмов с постером
    .filterExact('poster.url', SPECIAL_VALUE.NOT_NULL)
    // Добавляем фильтр для поиска фильмов с трейлерами
    .filterExact('videos.trailers.url', SPECIAL_VALUE.NOT_NULL);

  const firstQuery = baseQuery
    // получим первую страницу, чтобы узнать сколько всего фильмов удовлетворяет нашим фильтрам
    .paginate(1, 1)
    // Собираем запрос
    .build();

  // Отправляем запрос на получение количества фильмов
  const firstRes = await kp.movie.getByFilters(firstQuery);
  if (firstRes.data) {
    const { pages } = firstRes.data;
    // Генерируем случайное число от 1 до pages
    const randomPage = Math.floor(Math.random() * pages) + 1;
    const query = baseQuery.paginate(randomPage, 1).build();

    const { data, error, message } = await kp.movie.getByFilters(query);

    if (data) {
      console.log(data.docs[0]);
    }
    // Если будет ошибка, то выведем ее в консоль
    if (error) console.log(error, message);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (firstRes.error) console.log(firstRes.error, firstRes.message);
};

const bootstrap = async () => {
  await getMovieById();
  await getRelatedByQueryBuilderMovies();
  await getRelatedWithoutQueryBuilderMovies();
  await getRandomMovie();
  await getRandomMovieWithFilters();
};

bootstrap();

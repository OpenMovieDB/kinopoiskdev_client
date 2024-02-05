import {
  KinopoiskDev,
  SortType,
} from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

// Получение списка фильмов за 2020-2023 годы с рейтингом от 7.5 до 10, у которых есть постер и которые созданы в России или США
// Этот пример использует query builder
const getRelatedByQueryBuilderMovies = async () => {
  // Выбираем поля, которые мы хотим получить в ответе
  // Полный список полей можно посмотреть в документации
  // https://api.kinopoisk.dev/v1/documentation для метода /v1.4/movie
  // Отправляем запрос на получение фильмов
  const { data, error, message } = await kp.movie.getByFilters({
    selectFields: ['id', 'name', 'rating', 'poster', 'year'],
    // Добавляем фильтр для поиска фильмов с постером
    notNullFields: ['poster.url'],
    // Добавляем фильтр поиска по указанному диапазону года
    year: {
      $range: [
        2020,
        2023
      ]
    },
    // Добавляем фильтр поиска по указанному диапазону рейтинга
    'rating.kp': {
      $range: [
        7.5,
        10
      ],
    },
    // Добавим страны
    "countries.name": {
      $and: ['CША', 'Россия']
    },
    
    // Добавляем сортировку по рейтингу
    sort: {
      'rating.kp': SortType.DESC
    },

    // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
    page: 1,
    limit: 10,
  });

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
  // Отправляем запрос на получение фильмов
  const { data, error, message } = await kp.movie.getByFilters({
    // Выбираем поля, которые мы хотим получить в ответе
    selectFields: ['id', 'name', 'rating', 'poster', 'year'],
    // Добавляем фильтр поиска по указанному диапазону года
    year: {
      $range: [
        2020,
        2023
      ]
    },
    // Добавляем фильтр поиска по указанному диапазону рейтинга
    'rating.kp': {
      $range: [
        7.5,
        10
      ]
    },
    notNullFields: ['poster.url'],
    // Добавляем сортировку по рейтингу
    sort: {
      "rating.kp": SortType.DESC
    },
    // Добавляем пагинацию и получаем 1 страницу по с 10 фильмами на странице
    page: 1,
    limit: 10,
  });

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
  // Выбираем поля, которые мы хотим получить в ответе
  // Отправляем запрос на получение количества фильмов

  const query = {
    selectFields: ['id', 'name', 'rating', 'poster', 'year'],
    // Добавляем фильтр для поиска фильмов с постером и трейлером
    notNullFields: ['poster.url', 'videos.trailers.url'],

    // получим первую страницу, чтобы узнать сколько всего фильмов удовлетворяет нашим фильтрам
    page: 1,
    limit: 1
  }

  const firstRes = await kp.movie.getByFilters(query);
  if (firstRes.data) {
    const { pages } = firstRes.data;
    // Генерируем случайное число от 1 до pages
    const randomPage = Math.floor(Math.random() * pages) + 1;
    query.page = randomPage

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

// Найти фильмы по названию
const searchMovies = async () => {
  const { data, error, message } = await kp.movie.getBySearchQuery({
     query: 'Аватар 2022',
     page: 1,
     limit: 10,
  });

  if (data) {
    const { docs, page, limit } = data;
    console.log(`Страница ${page} из ${limit}`);
    console.log(docs);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получить все возможные жанры
const getGenres = async () => {
  // Отправляем запрос на получение жанров
  const { data, error, message } = await kp.movie.getPossibleValuesByField(
    {
      field: 'genres.name'
    }
  );

  if (data) console.log(data);

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получить все возможные страны
const getCountries = async () => {
  // Отправляем запрос на получение стран
  const { data, error, message } = await kp.movie.getPossibleValuesByField(
    {
      field: 'countries.name'
    },
  );

  if (data) console.log(data);

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

const bootstrap = async () => {
  await getMovieById();
  await getRelatedByQueryBuilderMovies();
  await getRelatedWithoutQueryBuilderMovies();
  await getRandomMovie();
  await getRandomMovieWithFilters();
  await searchMovies();
  await getGenres();
  await getCountries();
};

bootstrap();

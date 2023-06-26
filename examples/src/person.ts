import {
  KinopoiskDev,
  SORT_TYPE,
  PersonQueryBuilder,
} from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('ВАШ ТОКЕН');

// Получение списка персон, которые являются актерами или режиссерами
const getRelatedByQueryBuilderPersons = async () => {
  // Создаем билдер запросов для персон
  const queryBuilder = new PersonQueryBuilder();

  // Выбираем поля, которые мы хотим получить в ответе
  // Полный список полей можно посмотреть в документации
  // https://api.kinopoisk.dev/v1/documentation для метода /v1/person
  const query = queryBuilder
    .select(['id', 'name', 'photo', 'profession', 'movies'])
    // Добавляем фильтр поиска по указанным профессиям
    .filterExact('profession.value', 'Актер')
    .filterExact('profession.value', 'Режиссер')
    // Добавляем сортировку по id
    .sort('id', SORT_TYPE.DESC)
    // Добавляем пагинацию и получаем 1 страницу по с 10 персонами на странице
    .paginate(1, 10)
    // Собираем запрос
    .build();

  // Отправляем запрос на получение персон
  const { data, error, message } = await kp.person.getByFilters(query);

  if (data) {
    const { docs, page, limit } = data;
    console.log(`Страница ${page} из ${limit}`);
    console.log(docs);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получение полного списка персон участвующих в фильме
const getRelatedByQueryBuilderPersonsInMovie = async () => {
  // Создаем билдер запросов для персон
  const queryBuilder = new PersonQueryBuilder();

  const query = queryBuilder
    // Выбираем поля, которые мы хотим получить в ответе
    .select(['id', 'name', 'photo'])
    // Добавляем фильтр по id фильма. В данном случае это фильм с id 666
    .filterExact('movies.id', 666)
    // Собираем запрос
    .build();

  // Отправляем запрос на получение персон
  const { data, error, message } = await kp.person.getByFilters(query);

  if (data) {
    const { docs, page, limit } = data;
    console.log(`Страница ${page} из ${limit}`);
    console.log(docs);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Получение персоны по id
const getPersonById = async () => {
  // Отправляем запрос на получение персоны
  const { data, error, message } = await kp.person.getById(666);

  if (data) {
    console.log(data);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

// Найдем персону по имени
const getPersonByName = async () => {
  // Отправляем запрос на получение персоны
  const queryBuilder = new PersonQueryBuilder();
  const query = queryBuilder
    // Задаем поисковый запрос
    .query('Джонни Депп')
    // Указываем страницу и лимит
    .paginate(1, 10)
    // Собираем запрос
    .build();

  const { data, error, message } = await kp.person.getBySearchQuery(query);

  if (data) {
    console.log(data);
  }

  // Если будет ошибка, то выведем ее в консоль
  if (error) console.log(error, message);
};

const bootstrap = async () => {
  await getRelatedByQueryBuilderPersons();
  await getRelatedByQueryBuilderPersonsInMovie();
  await getPersonById();
};

bootstrap();

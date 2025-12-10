const PHOTOS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const COMMENTS_COUNT = 30;
const COMMENTS_IMG_COUNT = 6;

const PTHOTOS_DESCRIPTION = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.",
  "В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула",
  "C фотоаппаратом в руках",
  "У неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре",
  "Я уронил фотоаппарат на кота",
  "У меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.",
  "Как можно было поймать такой неудачный момент ? !",
  "Все хорошо",
  "Неудачный кадр",
  "Прогулка в лесу",
  "Ужасное здание на заднем плане",
];

const COMMENTS_AUTHOR_NAME = [
  "Наталья",
  "Дмитрий",
  "Михаил",
  "Анна",
  "Иван",
  "Ольга",
];
const COMMENTS_MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

/* Функция для генерации случайного целого числа от min до max */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/* Функция по поиску случайного элемента в переданном массиве */
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

let createId = 1;

let generateComments = (id) => {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, COMMENTS_IMG_COUNT)}.svg`,
    message: Array.from({ length: getRandomInteger(1, 2) }, () =>
      getRandomArrayElement(COMMENTS_MESSAGES)
    ).join(". "),
    name: getRandomArrayElement(COMMENTS_AUTHOR_NAME),
  };
};

const generatePhotos = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(PTHOTOS_DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: getRandomInteger(0, 30) }, () =>
    generateComments(createId++)
  ),
});

const createPhoto = Array.from({ length: PHOTOS_COUNT }, () =>
  generatePhotos(createId++)
);

console.log(createPhoto);

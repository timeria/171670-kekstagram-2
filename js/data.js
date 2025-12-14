import { getRandomInteger, getRandomArrayElement } from "./util.js";

const PHOTOS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const COMMENTS_COUNT = 30;
const COMMENTS_IMG_COUNT = 6;

const PHOTOS_DESCRIPTION = [
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

let photoId = 1;
let commentId = 1;

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
  description: getRandomArrayElement(PHOTOS_DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({ length: getRandomInteger(0, COMMENTS_COUNT) }, () =>
    generateComments(commentId++)
  ),
});

const createPhoto = Array.from({ length: PHOTOS_COUNT }, () =>
  generatePhotos(photoId++)
);

export { createPhoto };

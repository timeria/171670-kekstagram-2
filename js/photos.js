import { createPhoto } from "./data.js";

const photosTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture");

const containerPhotos = document.querySelector(".pictures");

const photosList = createPhoto;

const photosListFragment = document.createDocumentFragment();

photosList.forEach((element) => {
  const photoElement = photosTemplate.cloneNode(true);
  const photo = photoElement.querySelector(".picture__img");
  const photoLike = photoElement.querySelector(".picture__likes");
  const photoCommentsCount = photoElement.querySelector(".picture__comments");
  photo.src = element.url;
  photo.alt = element.description;
  photoLike.textContent = element.likes;
  photoCommentsCount.textContent = element.comments.length;
  photosListFragment.appendChild(photoElement);
});

containerPhotos.appendChild(photosListFragment);

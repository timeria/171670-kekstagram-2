import { createPhoto } from "./data.js";

const photosTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture");

const containerPhotos = document.querySelector(".pictures");

const photosListFragment = document.createDocumentFragment();

const renderPhoto = (photos) => {
  photos.forEach((element, id, url, description, comments, likes) => {
    const photoElement = photosTemplate.cloneNode(true);
    const photo = photoElement.querySelector(".picture__img");
    const photoLike = photoElement.querySelector(".picture__likes");
    const photoCommentsCount = photoElement.querySelector(".picture__comments");

    photoElement.dataset.pictureId = element.id;
    photo.src = element.url;
    photo.alt = element.description;
    photoLike.textContent = element.likes;
    photoCommentsCount.textContent = element.comments.length;
    photosListFragment.appendChild(photoElement);
  });

  containerPhotos.appendChild(photosListFragment);
};

export { renderPhoto };

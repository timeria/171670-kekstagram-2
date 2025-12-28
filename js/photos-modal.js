const bigPhoto = document.querySelector(".big-picture");
const bigPhotoElementImg = bigPhoto.querySelector(".big-picture__img img");
const bigPhotoClose = bigPhoto.querySelector("#picture-cancel");
const bigPhotoLikesCount = bigPhoto.querySelector(".likes-count");
const bigPhotoSocialCaption = bigPhoto.querySelector(".social__caption");
const bigPhotoCommentList = bigPhoto.querySelector(".social__comments");
const bigPhotoCommentItem =
  bigPhotoCommentList.querySelector(".social__comment");
const bigPhotoCommentCount = bigPhoto.querySelector(".social__comment-count");
const bigPhotoCommentsLoader = bigPhoto.querySelector(".comments-loader");
const photoTemplate = document.querySelector(".pictures");

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function closeBigPhoto() {
  bigPhoto.classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", onDocumentKeydown);
}

const openBigPhoto = (photos) => {
  photoTemplate.addEventListener("click", (evt) => {
    const photoElement = evt.target.closest(".picture");
    console.log(photoElement);

    if (!photoElement) {
      return;
    }

    evt.preventDefault();

    const photoId = photoElement.dataset.pictureId;
    const currentPhoto = photos.find((item) => item.id === Number(photoId));

    const commentsFragment = document.createDocumentFragment();

    bigPhotoElementImg.src = currentPhoto.url;
    bigPhotoElementImg.alt = currentPhoto.description;
    bigPhotoSocialCaption.textContent = currentPhoto.description;
    bigPhotoLikesCount.textContent = currentPhoto.likes;
    bigPhotoCommentCount.classList.add("hidden");
    bigPhotoCommentsLoader.classList.add("hidden");
    bigPhotoCommentList.innerHTML = "";

    currentPhoto.comments.forEach((comment) => {
      const commentElement = bigPhotoCommentItem.cloneNode(true);
      const commentImg = commentElement.querySelector(".social__picture");
      const commentText = commentElement.querySelector(".social__text");

      commentImg.src = comment.avatar;
      commentImg.alt = comment.name;
      commentText.textContent = comment.message;

      commentsFragment.appendChild(commentElement);
    });

    bigPhotoCommentList.appendChild(commentsFragment);

    bigPhoto.classList.remove("hidden");
    document.body.classList.add("modal-open");

    document.addEventListener("keydown", onDocumentKeydown);
  });

  bigPhotoClose.addEventListener("click", () => {
    closeBigPhoto();
  });
};

export { openBigPhoto };

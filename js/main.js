import { createPhoto } from "./data.js";
import { renderPhoto } from "./photos.js";
import { openBigPhoto } from "./photos-modal.js";

renderPhoto(createPhoto);

openBigPhoto(createPhoto);

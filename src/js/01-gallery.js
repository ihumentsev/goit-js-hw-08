// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems
  .map(item => {
    return ` 
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`;
  })
  .join('');

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionsDelay: 250,
});

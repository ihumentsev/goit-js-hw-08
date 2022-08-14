// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const refs = {
  galleryEl: document.querySelector('.gallery'),
};

let items = galleryItems.map(item => {
  return ` 
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
`;
});
refs.galleryEl.innerHTML = items.join('');

// открыть модал
refs.galleryEl.addEventListener('click', onModalClick);

function onModalClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  let gallery = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionsDelay: 250,
  });
  gallery.on('show.simplelightbox', function () {});
}

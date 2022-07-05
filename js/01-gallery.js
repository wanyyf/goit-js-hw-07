import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryEl = document.querySelector(".gallery")


const creatorItemDiv = ({preview,original,description}={}) => {
    return   `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
}

const createItem = () => { 
 return galleryItems.map(el => {
 return creatorItemDiv(el)
}).join("")
}
galleryEl.insertAdjacentHTML('beforeend',createItem(galleryItems))


const onLinkClick = (evt) => {
  
    if (evt.target.nodeName !== "IMG") return
    const getSrcImg = evt.target;
    evt.preventDefault()
    const backdrop = basicLightbox.create(`
		<img width="1400" height="900" src="${getSrcImg.dataset.source}">
	`).show()
   
}
galleryEl.addEventListener("click", onLinkClick)
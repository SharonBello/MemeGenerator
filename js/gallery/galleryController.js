'use strict'


function getGallery() {
    let imgsGallery = ""
    for (let i = 0; i < gMemeImages.length; i++) {
        imgsGallery += `<img onclick="openEditor('${i}.jpg')" id="img${i}" src="img/${gMemeImages[i]}.jpg">`
    }
    return imgsGallery
}

function renderGallery() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery()
}

function openEditor(imgName) {
    //hide div.gallery-container
    let galleryEl = document.querySelector('div.gallery-container')
    galleryEl.style.display = 'none'
    //show div.editor-container
    let editorEl = document.querySelector('div.editor-container')
    editorEl.style.display = 'block'
}

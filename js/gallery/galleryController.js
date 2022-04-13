'use strict'


function getGallery() {
    let imgsGallery = ''
    for (let i = 0; i < gMemeImages.length; i++) {
        imgsGallery += `<img onclick="openEditor('${i+1}.jpg')" id="img${i+1}" class="meme-box" src="img/${gMemeImages[i]}.jpg">`
    }
    return imgsGallery
}

function renderGallery() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery()
}

function openEditor(imgName) {
    //hide div.gallery-container
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'none'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    elEditor.style.display = 'flex'
    drawImage("img/" + imgName)
}

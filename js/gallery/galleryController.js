'use strict'

let keyFontSize = 16
let selectedImg

function getGallery(memeImages) {
    let imgsGallery = ''
    for (let i = 0; i < memeImages.length; i++) {
        imgsGallery += `<img onclick="openEditor('img/${i+1}.jpg')" id="img${i+1}" class="meme-box" src="img/${getMemeImgs()[i]}.jpg">`
    }
    return imgsGallery
}

function renderGallery() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery(getMemeImgs())
}

function renderCreations() {
    let elMemeImage = document.querySelector('.creation-img-container')
    elMemeImage.innerHTML = getCreations()
}

function openEditor(imgName) {
    setSelectedImgIdx(imgName)
    selectedImg = imgName
    //hide div.gallery-container
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'none'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    if (elComponents.style.display === 'none') {
        elEditor.style.display = 'flex'
        drawImage(imgName)
        drawTexts()
    }
}

function filterCategory(filterBy) {
    if (filterBy === "") {
        event.stopPropagation()
        event.preventDefault
        let elMemeImage = document.querySelector('.meme-img-container')
        elMemeImage.innerHTML = getGallery(getMemeImgs())
        return
    }
    let indicesMemes = gMemeKeywords.map((memeKeyword, index) => {
        if (memeKeyword.includes(filterBy))
            return index
    })
    indicesMemes = indicesMemes.filter(x => x !== undefined)
    let elMemeImage = document.querySelector('.meme-img-container')
    let arrImgs = [];
    indicesMemes.forEach(x => arrImgs.push(getMemeImgs()[x]))
    elMemeImage.innerHTML = getGallery(arrImgs)
    increaseKeywordSize(filterBy)
}

function increaseKeywordSize(filterBy) {
    let el = document.querySelector('button.' + filterBy)
    let idx = keywordsTypes.indexOf(filterBy)
    if (keywordsSize[idx] < 30) {
        keywordsSize[idx] += 2
    }
    if (el)
        el.style.fontSize = keywordsSize[idx] + 'px'
}

function resetCategory() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery(getMemeImgs())
    keywordsSize.fill(16)
    let elKeywords = document.querySelectorAll('.keyword')
    elKeywords.forEach(el => el.style.fontSize = '14px')
}

function searchKeywords(event) {
    let elSearch = document.querySelector('input.search').value
    filterCategory(elSearch)
    event.stopPropagation()
    event.preventDefault
}
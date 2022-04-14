'use strict'


function getGallery(memeImages) {
    let imgsGallery = ''
    for (let i = 0; i < memeImages.length; i++) {
        imgsGallery += `<img onclick="openEditor('${i+1}.jpg')" id="img${i+1}" class="meme-box" src="img/${gMemeImages[i]}.jpg">`
    }
    return imgsGallery
}

function renderGallery() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery(gMemeImages)
}

let selectedImg
function openEditor(imgName) {
    selectedImg= imgName
    //hide div.gallery-container
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'none'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    elEditor.style.display = 'flex'
    drawImage("img/" + imgName)
}

function filterCategory(filterBy) {
    if (filterBy==="") {
        let elMemeImage = document.querySelector('.meme-img-container')
        elMemeImage.innerHTML = getGallery(gMemeImages)
        return
    }
    let indicesMemes = gMemeKeywords.map((memeKeyword, index) => {
        if (memeKeyword.includes(filterBy))
            return index
    })
    indicesMemes = indicesMemes.filter(x => x!==undefined)
    let elMemeImage = document.querySelector('.meme-img-container')
    let arrImgs = [];
    indicesMemes.forEach(x => arrImgs.push(gMemeImages[x]))
    elMemeImage.innerHTML = getGallery(arrImgs)
    increaseKeywordSize(filterBy)
}

let keyFontSize = 16
function increaseKeywordSize(filterBy) {
    let el = document.querySelector('button.'+filterBy)
    let idx = keywordsTypes.indexOf(filterBy)
    if (keywordsSize[idx]<30) {
        keywordsSize[idx] += 2
    }
    if (el)
        el.style.fontSize = keywordsSize[idx] + 'px'
}

function resetCategory() {
    let elMemeImage = document.querySelector('.meme-img-container')
    elMemeImage.innerHTML = getGallery(gMemeImages)
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
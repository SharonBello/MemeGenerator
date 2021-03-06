'use strict'

let gSelectedImgIdx = -1 // start with -1 to include the first text index
let gMemeImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'] // array to work with display
let keywordsTypes = ['funny', 'men', 'movie', 'comic', 'animal', 'smile', 'baby'] // Keywords for filter func
let keywordsSize = [16, 16, 16, 16, 16, 16, 16] // Must refactor! This is not ok

let gMemeKeywords = [
    ['men', 'funny'],
    ['animal', 'two'],
    ['baby', 'animal'],
    ['animal', 'cute'],
    ['funny', 'baby'],
    ['comic', 'men'],
    ['comic', 'baby'],
    ['men', 'movie'],
    ['smile', 'baby'],
    ['men', 'smile'],
    ['men', 'two'],
    ['men', 'funny'],
    ['men', 'movie'],
    ['men', 'movie'],
    ['men', 'movie'],
    ['men', 'movie'],
    ['men', 'serious'],
    ['two', 'movie']
] // keywords array - match to each image imgsArray

let gMemeKeywordsFiltered = []
let gImgs = createImgsArray(gMemeImages, 'img')

function createImgsArray(memeImages, imgDir) { // Create array of objects. pass params of global images array and the URL
    let gImgs = []
    memeImages.forEach((img, index) => {
        gImgs.push({
            id: index,
            url: imgDir + '/' + img + '.jpg',
            keywords: gMemeKeywords[index]
        })
    })
    return gImgs
}

function getKeywordFilter() {
    return gMemeKeywordsFiltered
}

function getMemeImgs() {
    return gMemeImages
}

function setSelectedImgIdx(selectedImgIdx) {
    gSelectedImgIdx = selectedImgIdx
}

function getSelectedImgIdx() {
    return gSelectedImgIdx
}
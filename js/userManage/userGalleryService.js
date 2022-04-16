'use strict'


const KEY = 'memes'
const download = document.querySelector('.download')
let gUserMemes = []

function getCreations() {
    const memeImgs = loadFromStorage(KEY) //metadata includs x,y and text
    let imgsArray = createImgsArray(['5'], 'meme')
    let memesCreations = ''
    // const memeImgs = getMemeImgs()
    if (memeImgs) {
        for (let i = 0; i < imgsArray.length; i++) {
            createMemeImg(memeImgs[i])
            memesCreations += `<img onclick="openEditor('meme/${i+1}.jpg')" id="img${i+1}" class="meme-box" src="meme/${memeImgs[i].imgIdx}.jpg">`
        }
    }
    return memesCreations
}

function createMemeImg(meme) {
    let memeImg = new Image()
    memeImg.src = `${meme.imgIdx}`
    memeImg.onload = function () {
        ctx.drawImage(memeImg, 0, 0)
        setCanvas()
        ctx.strokeText(meme.text, meme.x, meme.y)
        ctx.fillText(meme.text, meme.x, meme.y)
        // ctx.drawText()
        ctx.save(meme.imgIdx.replace('img', 'meme'))
    }
}

function setUserMemes(memes) {
    gUserMemes = memes
}

function getUserMemes() {
    return gUserMemes
}

function memeRandomizer() {
    clearCanvas()
    openEditor('img/' + getRandomInt(gMemeImages.length) + '.jpg')
}
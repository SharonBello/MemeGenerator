'use strict'

function renderCanvas() {
    // gCtx.fillStyle = "black"
    gCtx.drawImage()
    gCtx.drawText()
    getMeme()
}

function drawImage() {
    let meme = new Image()
    meme.src = 'img/1.jpg'
    meme.onload = drawMemeScaled.bind(null, meme, gCtx);
}

function drawMemeScaled(meme, gCtx) {
    gElCanvas = gCtx.canvas
    // var memeHorizontalRatio = gElCanvas.width - 200 / meme.width
    // var memeVerticalRatio = gElCanvas.height - 200 / meme.height
    var ratio = Math.min(meme.width/ meme.height)
    var centerShift_x = (gElCanvas.width - meme.width * ratio) / 2
    var centerShift_y = (gElCanvas.height - meme.height * ratio) - 100
    gCtx.drawImage(meme, 0, 0, meme.width, meme.height,
        centerShift_x, centerShift_y, meme.width * ratio, meme.height * ratio)
        drawText()
}

const drawText = function(){
    let txt = document.getElementById('topLine').value
    let x = gElCanvas.width -  550
    let y = gElCanvas.height - 520
    gCtx.font = `58px impact`
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 8
    gCtx.strokeText(txt, x, y)
    // var m=gCtx.measureText(txt)
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y)
}

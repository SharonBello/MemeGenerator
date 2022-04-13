'use strict'

function renderCanvas() {
    // gCtx.fillStyle = "black"
    gCtx.drawImage()
    gCtx.drawText()
    getMeme()
}

function drawImage(imgSrc) {
    let meme = new Image()
    meme.src = imgSrc
    meme.onload = drawMemeScaled.bind(null, meme, gCtx);
}

function drawMemeScaled(meme, gCtx) {
    gElCanvas = gCtx.canvas
    gCtx.beginPath();
    let ratio = Math.min((gElCanvas.width / meme.width), (gElCanvas.height / meme.height))
    let ratioWidth = meme.width*ratio
    let ratioHeight = meme.height*ratio
    gCtx.drawImage(meme, (gElCanvas.width-ratioWidth)/2,(gElCanvas.height-ratioHeight)/2,ratioWidth,ratioHeight)
    drawText()
    addNewLine()

}

const drawText = function () {
    let txt = document.getElementById('topLine').value
    let x = gElCanvas.width - 500
    let y = gElCanvas.height - 600
    gCtx.font = `30px impact`
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.strokeText(txt, x, y)
    // var m=gCtx.measureText(txt)
    gCtx.fillStyle = 'white'
    gCtx.fillText(txt, x, y)
    gCtx.save()
}

// gCtx.drawFocusIfNeeded(gElCanvas)

function addNewLine() {
    let newTextLine = document.getElementById('topLine').value = ''
    let x = gElCanvas.width - 500
    let y = gElCanvas.height - 400
    gCtx.font = `30px impact`
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.strokeText(newTextLine, x, y)
    // var m=gCtx.measureText(txt)
    gCtx.fillStyle = 'white'
    gCtx.fillText(newTextLine, x, y)
    renderCanvas()
    gCtx.save()

}

'use strict'

function renderCanvas() {
    // ctx.fillStyle = "black"
    ctx.drawImage()
    ctx.drawText()
    getMeme()
}

function drawImage(imgSrc) {
    let meme = new Image()
    meme.src = imgSrc
    meme.onload = drawMemeScaled.bind(null, meme, ctx);
}

function drawMemeScaled(meme, ctx) {
    canvas = ctx.canvas
    ctx.beginPath();
    let ratio = Math.min((canvas.width / meme.width), (canvas.height / meme.height))
    let ratioWidth = meme.width*ratio
    let ratioHeight = meme.height*ratio
    ctx.drawImage(meme, (canvas.width-ratioWidth)/2,(canvas.height-ratioHeight)/2,ratioWidth,ratioHeight)
    drawText()
    addNewLine()

}

const drawText = function () {
    let txt = document.querySelector('input[name="userText"]').value
    let userFontFillStyle = document.querySelector('input[name="fontColor"]').value
    let userFontStrokeStyle = document.querySelector('input[name="fontStrokeColor"]').value
    let fontStrokeWidth = document.querySelector('input[name="fontStrokeWidth"]').value
    // let fontStrokeWidth = document.getElementById('fontStrokeWidth').value
    let x = canvas.width - 500
    let y = canvas.height - 600
    ctx.beginPath()
    // ctx.textBaseline = top
    ctx.font = `30px impact`
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.strokeText(txt, x, y)
    // var m=ctx.measureText(txt)
    ctx.fillStyle = userFontFillStyle
    ctx.fillText(txt, x, y)
    ctx.save()
}

// ctx.drawFocusIfNeeded(canvas)

function addNewLine() {
    let newTextLine = document.querySelector('input[name="userText"]').value = ''
    let x = canvas.width - 500
    let y = canvas.height - 600
    // ctx.textBaseline = middle
    ctx.beginPath()
    ctx.font = `30px impact`
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.moveTo(0, y - 100)
    // ctx.lineTo(550, y + 0.5)
    ctx.strokeText(newTextLine, x, y)
    // var m=ctx.measureText(txt)
    ctx.fillStyle = 'white'
    ctx.fillStyle = userFontFillStyle
    // renderCanvas()
    ctx.save()
}



// function moveNewText(baseline, index) {
//     onst baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
//     ctx.font = '36px serif';
//     ctx.strokeStyle = 'red';
    
//     baselines.forEach(function (baseline, index) {
//       ctx.textBaseline = baseline;
//       const y = 75 + index * 75;
//       ctx.beginPath();
//       ctx.moveTo(0, y + 0.5);
//       ctx.lineTo(550, y + 0.5);
//       ctx.stroke();
//       ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
//     });
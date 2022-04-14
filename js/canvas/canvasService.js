'use strict'

let offsetX
let offsetY

function setOffsets(event) {
    let rect = canvas.getBoundingClientRect()
    // variables used to get mouse position on the canvas
    offsetX = event.clientX - rect.left
    offsetY = event.clientY - rect.top
    // let canvasOffset = event.setOffsets;
}

// test if x,y is inside the bounding box 
function textHitBounds(x, y, textIndex) {
    let texts = getTexts()
    let text = texts[textIndex]
    return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y)
}

// handle mousedown events
function handleMouseDown(e) {
    setOffsets(e)
    e.preventDefault()
    startX = parseInt(e.clientX - offsetX)
    startY = parseInt(e.clientY - offsetY)
    let texts = getTexts()
    // Put your mousedown stuff here
    for (let i = 0; i < texts.length; i++) {
        if (textHitBounds(startX, startY, i)) {
            gSelectedText = i
        }
    }
}

// done dragging
function handleMouseUp(e) {
    e.preventDefault()
    gSelectedText = -1
}

// also done dragging
function handleMouseOut(e) {
    e.preventDefault()
    gSelectedText = -1
}

// handle mousemove events
function handleMouseMove(e) {
    setOffsets(e)
    if (gSelectedText < 0) {
        return;
    }
    e.preventDefault()
    mouseX = parseInt(e.clientX - offsetX)
    mouseY = parseInt(e.clientY - offsetY)

    // Put your mousemove stuff here
    let dx = mouseX - startX
    let dy = mouseY - startY
    startX = mouseX
    startY = mouseY
    let texts = getTexts()
    let text = texts[gSelectedText]
    text.x += dx
    text.y += dy
    draw()
}

function renderCanvas() {
    ctx.drawImage()
    ctx.drawText()
    getMeme()
}

function setCanvas() {
    let userFontFillStyle = document.querySelector('input[name="fontColor"]').value
    let userFontStrokeStyle = document.querySelector('input[name="fontStrokeColor"]').value
    let fontStrokeWidth = document.querySelector('input[name="fontStrokeWidth"]').value
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.textBaseline = top
    ctx.font = fontSize + 'px impact'
    ctx.textAlign = 'left'
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.fillStyle = userFontFillStyle
    ctx.save()
}

function drawImage(imgSrc) {
    let meme = new Image()
    meme.src = imgSrc
    meme.onload = drawMemeScaled.bind(null, meme, ctx)
}

function drawMemeScaled(meme, ctx) {
    canvas = ctx.canvas
    ctx.beginPath()
    let ratio = Math.min((canvas.width / meme.width), (canvas.height / meme.height))
    let ratioWidth = meme.width * ratio
    let ratioHeight = meme.height * ratio
    ctx.drawImage(meme, (canvas.width - ratioWidth) / 2, (canvas.height - ratioHeight) / 2, ratioWidth, ratioHeight)
    drawTexts()
}

function appendText(elMemeTxt) {
    let userTxtInput = elMemeTxt.innerHTML
    userTxtInput = `<input type="text" name="userInput" class=userTextInput />`
    return userTxtInput
}

function drawTexts() {
    let texts = getTexts()
    let spacing = 40
    if (texts.length === 1) {
        ctx.strokeText(texts[0], xCoord, 50)
        ctx.fillText(texts[0], xCoord, 50)
    } else if (texts.length >= 2) {
        ctx.strokeText(texts[0], xCoord, (1) * 50)
        ctx.fillText(texts[0], xCoord, (1) * 50)
        ctx.strokeText(texts[texts.length - 1], xCoord, 450)
        ctx.fillText(texts[texts.length - 1], xCoord, 450)

        texts.forEach((sentence, index) => {
            if (index !== 0 && index !== (texts.length - 1)) {
                ctx.strokeText(sentence, xCoord, 250 + spacing)
                ctx.fillText(sentence, xCoord, 250 + spacing)
                spacing += 20
            }
        })
    }
}

function clearCanvas() {
    drawImage("img/" + selectedImg)
}
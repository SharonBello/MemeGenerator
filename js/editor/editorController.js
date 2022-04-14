'use strict'

let lastVal
let xCoord = 0
let fontSize = 28


const handleOnChange = (e) => {
    let currSentence = getSentence()
    const textLine = e.target.value
    setCanvas()
    ctx.strokeText(textLine, 50, (currSentence + 1) * 50)
    ctx.fillText(textLine, 50, (currSentence + 1) * 50)
    ctx.save()
    e.stopPropagation()
}

function addNewSentence(e) {
    let newTextLine = document.querySelector('input[class="userTextInput"]').value
    let texts = getTexts()
    let currSentence = getSentence()
    currSentence += 1
    if (texts.length >= 2) {
        lastVal = texts[texts.length - 1]
        texts.pop()
        texts.push(newTextLine)
        texts.push(lastVal)
    } else {
        texts.push(newTextLine)
    }
    clearCanvas()
    drawTexts()
    setCanvas()
    e.stopPropagation()
}

function toggleLines() {
    let texts = getTexts()
    if (texts.length >= 2) {
        clearCanvas()
        const tmp = texts[0]
        texts[0] = texts[texts.length - 1]
        texts[texts.length - 1] = tmp
        ctx.strokeText(texts[0], 50, (1) * 50)
        ctx.fillText(texts[0], 50, (1) * 50)
        ctx.strokeText(texts[texts.length - 1], 50, 450)
        ctx.fillText(texts[texts.length - 1], 50, 450)
    }
}

function deleteLastSentence() {
    let texts = getTexts()
    if (texts.length < 1) texts.pop()
    else if (texts.length >= 1) texts.splice(texts.length - 2, 1)
    clearCanvas()
    drawTexts()
    setCanvas()
}

function alignLeft() {
    xCoord = 50
    clearCanvas()
    drawTexts()
}

function alignCenter() {
    xCoord = 50
    clearCanvas()
    drawTexts()
}

function alignRight() {
    xCoord = 100
    clearCanvas()
    drawTexts()
}

function increaseFontSize() {
    if (fontSize <= 34) {
        fontSize += 2
    }
    clearCanvas()
    drawTexts()
    setCanvas()
}

function decreaseFontSize() {
    if (fontSize >= 14) {
        fontSize -= 2
    }
    clearCanvas()
    drawTexts()
    setCanvas()
}

///// MAYNE SWITCH???
// The next 2 functions handle IMAGE UPLOADING to img tag from file system: 
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    let reader = new FileReader()

    reader.onload = (event) => {
        let img = new Image()
        // Render on canvas
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}
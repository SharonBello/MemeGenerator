'use strict'

let lastVal

function renderCanvas() {
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
    ctx.beginPath()
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    let ratio = Math.min((canvas.width / meme.width), (canvas.height / meme.height))
    let ratioWidth = meme.width * ratio
    let ratioHeight = meme.height * ratio
    ctx.drawImage(meme, (canvas.width - ratioWidth) / 2, (canvas.height - ratioHeight) / 2, ratioWidth, ratioHeight)
    drawSentences()
}

function appendText(elMemeTxt) {
    let userTxtInput = elMemeTxt.innerHTML
    userTxtInput = `<input type="text" name="userInput" class=userTextInput />`
    return userTxtInput
}

function setCanvas() {
    let userFontFillStyle = document.querySelector('input[name="fontColor"]').value
    let userFontStrokeStyle = document.querySelector('input[name="fontStrokeColor"]').value
    let fontStrokeWidth = document.querySelector('input[name="fontStrokeWidth"]').value
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.textBaseline = top
    ctx.font = `28px impact`
    ctx.textAlign = 'right'
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.fillStyle = userFontFillStyle
    ctx.save()
}

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
    let sentences = getSentences()
    let currSentence = getSentence()
    currSentence += 1
    if (sentences.length >= 2) {
        lastVal = sentences[sentences.length - 1]
        sentences.pop()
        sentences.push(newTextLine)
        sentences.push(lastVal)
    } else {
        sentences.push(newTextLine)
    }

    clearCanvas()
    drawSentences()
    setCanvas()
    e.stopPropagation()
}

function toggleTopBottom() {
    let sentences = getSentences()
    if (sentences.length >= 2) {
        clearCanvas()
        const tmp = sentences[0]
        sentences[0] = sentences[sentences.length - 1]
        sentences[sentences.length - 1] = tmp
        ctx.strokeText(sentences[0], 50, (1) * 50)
        ctx.fillText(sentences[0], 50, (1) * 50)
        ctx.strokeText(sentences[sentences.length - 1], 50, 450)
        ctx.fillText(sentences[sentences.length - 1], 50, 450)
    }
}

function drawSentences() {
    let sentences = getSentences()
    let spacing = 40
    if (sentences.length === 1) {
        if (ctx.textAlign === 'center') {
            ctx.strokeText(sentences[0], 150, 50)
            ctx.fillText(sentences[0], 150, 50)
        } else if (ctx.textAlign === 'left') {
            ctx.strokeText(sentences[0], 50, 50)
            ctx.fillText(sentences[0], 50, 50)
        } else if (ctx.textAlign === 'right')
            ctx.strokeText(sentences[0], 450, 50)
            ctx.fillText(sentences[0], 450, 50)
    } 
    else if (sentences.length >= 2) {
        if (ctx.textAlign === 'center') {
            ctx.strokeText(sentences[0], 150, (1) * 50)
            ctx.fillText(sentences[0], 150, (1) * 50)
            ctx.strokeText(sentences[sentences.length - 1], 150, 450)
            ctx.fillText(sentences[sentences.length - 1], 150, 450)
        } else if (ctx.textAlign === 'left') {
            ctx.strokeText(sentences[0], 50, (1) * 50)
            ctx.fillText(sentences[0], 50, (1) * 50)
            ctx.strokeText(sentences[sentences.length - 1], 50, 450)
            ctx.fillText(sentences[sentences.length - 1], 50, 450)
        } else if (ctx.textAlign === 'right') {
            ctx.strokeText(sentences[0], 450, (1) * 50)
            ctx.fillText(sentences[0], 450, (1) * 50)
            ctx.strokeText(sentences[sentences.length - 1], 450, 450)
            ctx.fillText(sentences[sentences.length - 1], 450, 450)
        }
        sentences.forEach((sentence, index) => {
            if (index !== 0 && index !== (sentences.length - 1)) {
                if (ctx.textAlign === 'center') {
                    ctx.strokeText(sentences[0], 150, 250 + spacing)
                    ctx.fillText(sentences[0], 150, 250 + spacing)
                } else if (ctx.textAlign === 'left') {
                    ctx.strokeText(sentences[0], 50, 250 + spacing)
                    ctx.fillText(sentences[0], 50, 250 + spacing)
                } else if (ctx.textAlign === 'right')
                    ctx.strokeText(sentences[0], 450, 250 + spacing)
                    ctx.fillText(sentences[0], 450, 250 + spacing)
                spacing += 20
            }
        })
    }
}

function clearCanvas() {
    drawImage("img/" + selectedImg)
}

function deleteLastSentence() {
    let sentences = getSentences()
    if (sentences.length < 1) sentences.pop()
    else if (sentences.length >= 1) sentences.splice(sentences.length - 2, 1)
    clearCanvas()
    drawSentences()
    setCanvas()
}

function alignLeft() {
        
}

function alignLeft() {
        
}

function alignRight() {
        
}

function increaseFontSize() {
    
}

function decreaseFontSize() {
    
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



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
    ctx.textBaseline = top
    ctx.font = `30px impact`
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.fillStyle = userFontFillStyle
    ctx.save()
}

const handleOnChange = (e) => {
    let currSentence = getSentence()
    const textLine = e.target.value
    setCanvas()
    ctx.strokeText(textLine, 20, (currSentence+1)*50)
    ctx.fillText(textLine, 20, (currSentence+1)*50)
    ctx.save()
    e.stopPropagation()
}

function addNewLine(e) {
    let newTextLine = document.querySelector('input[class="userTextInput"]').value
    let sentences = getSentences()
    let currSentence = getSentence()
    currSentence += 1
    if (sentences.length>=2) {
        const lastVal = sentences[sentences.length-1]
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

function toggleLines() {
    let sentences = getSentences()
    if (sentences.length>=2) {
        clearCanvas()
        const tmp = sentences[0]
        sentences[0] = sentences[sentences.length-1]
        sentences[sentences.length-1] = tmp
        ctx.strokeText(sentences[0], 20, (1)*50)
        ctx.fillText(sentences[0], 20, (1)*50)
        ctx.strokeText(sentences[sentences.length-1], 20, 450)
        ctx.fillText(sentences[sentences.length-1], 20, 450)
    }
}

function drawSentences() {
    let sentences = getSentences()
    let spacing = 40
    if (sentences.length === 1) {
        ctx.strokeText(sentences[0], 20, 50)
        ctx.fillText(sentences[0], 20, 50)
        
    }else if (sentences.length >= 2) {
        ctx.strokeText(sentences[0], 20, (1)*50)
        ctx.fillText(sentences[0], 20, (1)*50)
        ctx.strokeText(sentences[sentences.length-1], 20, 450)
        ctx.fillText(sentences[sentences.length-1], 20, 450)

        sentences.forEach((sentence, index) => {
            if (index!==0 && index!==(sentences.length-1)) {
                ctx.strokeText(sentence, 20, 250 + spacing)
                ctx.fillText(sentence, 20, 250 + spacing)
                spacing += 20    
            }
        })
    }
}

function clearCanvas() {
    drawImage("img/" + selectedImg)
}

function deleteLine() {
    
}



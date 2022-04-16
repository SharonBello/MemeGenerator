'use strict'

let lastVal
let xCoord = 0
let fontSize = 28

function onKeyUp(e) {
    appendNewText(e)
}

function appendNewText(e) {
    let newTextLine = document.querySelector('input[class="userTextInput"]').value
    let selectedTextIdx = getSelectedText()
    let spacing = 20
    if (selectedTextIdx === 0) {
        ctx.strokeText(newTextLine, canvas.width / 5, canvas.height / 5)
        ctx.fillText(newTextLine, canvas.width / 5, canvas.height / 5)
    } else if (selectedTextIdx === 1) {
        ctx.strokeText(newTextLine, canvas.width / 5, 450)
        ctx.fillText(newTextLine, canvas.width / 5, 450)
    } else {
        ctx.strokeText(newTextLine, canvas.width / 5, 250 + spacing * (selectedTextIdx))
        ctx.fillText(newTextLine, canvas.width / 5, 250 + spacing * (selectedTextIdx))
    }
    e.stopPropagation()
}

function addNewText(e) {
    let newTextLine = document.querySelector('input[class="userTextInput"]').value
    document.querySelector('input[class="userTextInput"]').value = ""
    const newText = {
        text: newTextLine,
        x: canvas.width / 5,
        y: canvas.height / 5
    }
    let texts = getTexts()
    let selectedTextIdx = getSelectedText()
    selectedTextIdx += 1
    setSelectedText(selectedTextIdx)
    if (texts.length >= 2) {
        lastVal = texts[texts.length - 1]
        texts.pop()
        texts.push(newText)
        texts.push(lastVal)
    } else {
        texts.push(newText)
    }
    renderCanvas()
    e.stopPropagation()
}

function toggleTopBottom() {
    let texts = getTexts()
    if (texts.length >= 2) {
        clearCanvas()
        const tmp = texts[0]
        texts[0] = texts[texts.length - 1]
        texts[texts.length - 1] = tmp
        ctx.strokeText(texts[0].text, canvas.width / 5, (1) * canvas.height / 5)
        ctx.fillText(texts[0].text, canvas.width / 5, (1) * canvas.height / 5)
        ctx.strokeText(texts[texts.length - 1].text, canvas.width / 5, 450)
        ctx.fillText(texts[texts.length - 1].text, canvas.width / 5, 450)
    }
}

function deleteLastSentence() {
    let texts = getTexts()
    if (texts.length < 1) texts.pop()
    else if (texts.length >= 1) texts.splice(texts.length - 2, 1)
    let selectedTextIdx = getSelectedText()
    selectedTextIdx -= 1
    setSelectedText(selectedTextIdx)
    renderCanvas()
}

function alignLeft() {
    xCoord = canvas.width / 5
    let texts = getTexts()
    texts.forEach((text) => {
        text.x = canvas.width / 5
    })
    setTexts(texts)
    clearCanvas()
}

function alignCenter() {
    xCoord = canvas.width / 2
    let texts = getTexts()
    texts.forEach((text) => {
        text.x = canvas.width / 2
    })
    setTexts(texts)
    clearCanvas()
}

function alignRight() {
    xCoord = 4 * canvas.width / 5
    let texts = getTexts()
    texts.forEach((text) => {
        text.x = 4 * canvas.width / 5
    })
    setTexts(texts)
    clearCanvas()
}

function increaseFontSize() {
    if (fontSize <= 34) {
        fontSize += 2
    }
    renderCanvas()
}

function decreaseFontSize() {
    if (fontSize >= 14) {
        fontSize -= 2
    }
    renderCanvas()
}

function changeFontStrokeColor(e) {
    let userFontStrokeStyle = document.querySelector('input[name="fontStrokeColor"]').value
    ctx.strokeStyle = userFontStrokeStyle
    drawTexts()
}

function changeFontFamily(sel) {
    gFontFamily = sel.value
    renderCanvas()
}


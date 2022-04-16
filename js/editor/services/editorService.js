'use strict'

let canvas
let ctx
let gTexts = []
let gSelectedText = 0


function getSelectedText() {
    return gSelectedText
}

function setSelectedText (selectedTextIdx) {
    gSelectedText = selectedTextIdx
}

function setTexts(texts) {
    gTexts = texts
}

function getTexts() {
    return gTexts
}


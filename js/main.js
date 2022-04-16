'use strict'

function init() {
    canvas = document.querySelector('#canvas')
    ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 514
    renderGallery()
    renderCreations()
    setCanvas()
    document.querySelector('input.userTextInput').addEventListener('keyup', onKeyUp);;
    addListeners()
    renderCanvas()

}

function goToGallery() {
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'block'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    elEditor.style.display = 'none'
}


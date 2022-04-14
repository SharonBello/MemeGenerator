'use strict'

function init() {
    canvas = document.querySelector('#canvas')
    ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 514
    renderGallery()
}

function goToGallery() {
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'block'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    elEditor.style.display = 'none'
}

// function readAbout() {
//     let elAbout = ''
//     elAbout += `<dialog class="modal" >
//     <button class="close-button">X</button>
//       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//         nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia
//         deserunt mollit anim id est laborum</p>
//   </dialog>`
//   elAbout.innerHTML.style.width = '100px'
//   elAbout.innerHTML.style.height = '100px'
// }


// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     canvas.width = elContainer.offsetWidth
//     canvas.height = elContainer.offsetHeight
// }


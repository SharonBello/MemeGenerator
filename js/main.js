'use strict'

function init() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
    // addListeners()
    renderGallery()
    drawText()
    document.getElementById('topLine').addEventListener('input', drawText)
}


function goToGallery() {
    let elComponents = document.querySelector('div.components-container')
    elComponents.style.display = 'block'
    //show div.editor-container
    let elEditor = document.querySelector('div.editor-container')
    elEditor.style.display = 'none'
}

function readAbout() {
    let elAbout = ''
    elAbout += `<dialog class="modal" >
    <button class="close-button">X</button>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia
        deserunt mollit anim id est laborum</p>
  </dialog>`
//   elAbout.innerHTML.style.width = '100px'
//   elAbout.innerHTML.style.height = '100px'
}




// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }


// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {
//         resizeCanvas()
//     })
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!MemeClicked(pos)) return
//     setMemeDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }

// function onMove(ev) {
//     const circle = getMeme();
//     if (!circle.isDrag) return
//     const pos = getEvPos(ev)
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveMeme(dx, dy)
//     gStartPos = pos
//     renderCanvas()
// }

// function onUp() {
//     setMemeDrag(false)
//     document.body.style.cursor = 'grab'
// }
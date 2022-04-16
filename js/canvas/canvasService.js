'use strict'

let gTouchEvs = ['touchstart', 'touchmove', 'touchend']
let gFontFamily = 'impact'

let gMemeTextMove

function createTextMove(pos) {
    gMemeTextMove = {
        pos,
        size: 30,
        isDrag: false
    }
}

function getTextMove() {
    return gMemeTextMove
}

function isTextClicked(clickedPos) {
    const { pos } = gMemeTextMove
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    return distance <= gMemeTextMove.size
}

function setTextDrag(isDrag) {
    gMemeTextMove.isDrag = isDrag
}

function moveText(dx, dy) {
    gMemeTextMove.pos.x += dx
    gMemeTextMove.pos.y += dy
}

function setCanvas() {
    let userFontFillStyle = document.querySelector('input[name="fontColor"]').value
    let userFontStrokeStyle = document.querySelector('input[name="fontStrokeColor"]').value
    let fontStrokeWidth = document.querySelector('input[name="fontStrokeWidth"]').value
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.textBaseline = top
    ctx.font = fontSize + 'px ' + gFontFamily
    ctx.textAlign = canvas.width / 2
    ctx.strokeStyle = userFontStrokeStyle
    ctx.lineWidth = fontStrokeWidth
    ctx.fillStyle = userFontFillStyle
    ctx.save()
}
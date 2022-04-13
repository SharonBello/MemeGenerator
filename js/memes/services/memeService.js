'use strict'

// const gTouchEvs = ['touchdown', 'touchmove', 'touchend', 'touchout']

let gElCanvas
let gCtx
let gMeme
let gCurrentMeme


let memePos = {
    x: 0,
    y: 0,
    isDown: false
}

function draw(ev) {
    const {
        x,
        y,
    } = gMeme


    switch (gCurrentMeme) {
        case 'meme':
            drawImg(x, y)
            break
        case 'text':
            drawText('', x, y);
             break
    }
}



function getMeme() {
    return gMeme
}

// function isMemeClicked(clickedPos) {
//     const { pos } = gMeme
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <= gMeme.size
// }



// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft,
//             y: ev.pageY - ev.target.offsetTop
//         }
//     }
//     return pos
// }


// function setMemeDrag(isDrag) {
//     gMeme.isDrag = isDrag
// }

// function moveMeme(dx, dy) {
//     gMeme.pos.x += dx
//     gMeme.pos.y += dy
// }
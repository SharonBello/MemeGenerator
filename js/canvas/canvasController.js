'use strict'

function renderCanvas() {
    clearCanvas()
    setCanvas()
    drawTexts()
}

function drawImage(imgSrc) {
    let meme = new Image()
    meme.src = imgSrc
    meme.onload = drawMemeScaled.bind(null, meme, ctx)
}

function drawMemeScaled(meme, ctx) {
    canvas = ctx.canvas
    ctx.beginPath()
    let ratio = Math.min((canvas.width / meme.width), (canvas.height / meme.height))
    let ratioWidth = meme.width * ratio
    let ratioHeight = meme.height * ratio
    ctx.drawImage(meme, (canvas.width - ratioWidth) / 2, (canvas.height - ratioHeight) / 2, ratioWidth, ratioHeight)
    drawTexts()
}

function drawTexts() {
    let texts = getTexts()
    let spacing = 40
    if (texts.length === 1) {
        ctx.strokeText(texts[0].text, texts[0].x, canvas.width / 5)
        ctx.fillText(texts[0].text, texts[0].x, canvas.width / 5)
    } else if (texts.length >= 2) {
        ctx.strokeText(texts[0].text, texts[0].x, (1) * canvas.width / 5)
        ctx.fillText(texts[0].text, texts[0].x, (1) * canvas.width / 5)
        ctx.strokeText(texts[texts.length - 1].text, texts[texts.length - 1].x, 450)
        ctx.fillText(texts[texts.length - 1].text, texts[texts.length - 1].x, 450)

        texts.forEach((t, index) => {
            if (index !== 0 && index !== (texts.length - 1)) {
                ctx.strokeText(t.text, t.x, 250 + spacing)
                ctx.fillText(t.text, t.x, 250 + spacing)
                spacing += 20
            }
        })
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage(selectedImg)
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mousedown', onDown)
    canvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    canvas.addEventListener('touchmove', onMove)
    canvas.addEventListener('touchstart', onDown)
    canvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isTextClicked(pos)) return
    setTextDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const text = getTextMove()
    if (!text.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveText(dx, dy)
    gStartPos = pos
    renderCanvas()
}

function onUp() {
    setTextDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    canvas.width = elContainer.offsetWidth
    canvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}

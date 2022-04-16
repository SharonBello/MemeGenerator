'use strict'

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
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function downloadCanvas(elLink) {
    const data = canvas.toDataURL()
    elLink.href = data
    elLink.download = 'Amazing'
}

function saveMeme() {
    let memes = getUserMemes()
    let selectedTextIdx = getSelectedText()
    let texts = getTexts()
    texts[selectedTextIdx - 1]['imgIdx'] = getSelectedImgIdx()
    memes.push(texts[selectedTextIdx - 1])
    saveToStorage(KEY, memes)
}
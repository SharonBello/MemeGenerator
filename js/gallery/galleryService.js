'use strict'


let gCurrentMemeImage
let gMemeImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' , '13', '14', '15', '16', '17' , '18']
let gMemeKeywords = [['men', 'funny'],['animal', 'two'],['baby', 'animal'],['animal', 'cute'],['funny', 'baby'],['comic', 'men'],['comic', 'baby'],['men', 'movie'],['smile', 'baby'],['men', 'smile'],['men', 'two'],['men', 'funny'],['men', 'movie'],['men', 'movie'],['men', 'movie'],['men', 'movie'],['men', 'serious'],['two', 'movie'] ]
let gImgs = createImgsArray() 

function createImgsArray() {
    let gImgs = []
    gMemeImages.forEach((img, index) => {
        gImgs.push({
            id: index,
            url: 'imgs/'+img+'.jpg',
            keywords: gMemeKeywords[index]
        })
    })
    return gImgs
}


//TODO
function getMemeImgSrc() {
    let memeImgSrc = gMemeImages[0]
    console.log('memeIdMGsRC: ', memeImgSrc)
}


// Change Meme from Gallery to Editor
// function changeMeme(thisObj) {
//     let gCurrentMeme = document.querySelectorAll('#img')[0]
//     let editMemeSrc = gCurrentMeme.src
//     let slash = "/"
//     let splitSrc = document.querySelectorAll('#img')[0].src.split(slash)
//     let lastEditMemeSrc = splitSrc.length - 1
  
//     let galleryMemeSrc = thisObj.src.split(slash)
//     let lastGalleryMemeSrc = galleryMemeSrc.length - 1
  
//     let newEditMemeSrc = editMemeSrc.replace(splitSrc[lastEditMemeSrc], '')
//     thisObj.style.cursor = 'pointer'
  
//     document.querySelectorAll("img")[0].src = newEditMemeSrc + galleryMemeSrc[lastGalleryMemeSrc]
//   }
'use strict'


let gCurrentMemeImage
let gMemeImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' , '13', '14', '15', '16', '17' , '18']
let keywordsTypes = ['funny', 'men', 'movie', 'comic', 'animal', 'smile', 'baby']
let keywordsSize = [16, 16, 16, 16, 16, 16, 16]

let gMemeKeywords = [['men', 'funny'],['animal', 'two'],['baby', 'animal'],['animal', 'cute'],['funny', 'baby'],['comic', 'men'],['comic', 'baby'],['men', 'movie'],['smile', 'baby'],['men', 'smile'],['men', 'two'],['men', 'funny'],['men', 'movie'],['men', 'movie'],['men', 'movie'],['men', 'movie'],['men', 'serious'],['two', 'movie'] ]
let gMemeKeywordsFiltered = []
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




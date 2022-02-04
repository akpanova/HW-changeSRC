let linkOne = document.querySelector('#link-one'),
      linkTwo = document.querySelector('#link-two'), 
      linkThree = document.querySelector('#link-three'),
      linkFour = document.querySelector('#link-four');
let img = document.querySelector('img')

// linkOne.addEventListener('click', () => {
//     img.scr = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-50-most-romantic-movies-of-all-time-titantic-1517604052.jpg';
// })

// linkTwo.addEventListener('click', () => {
//     img.scr = 'https://prikolnye-kartinki.ru/img/picture/Aug/28/c78389df2584386efbc79a944ffa5c5b/1.jpg';
// })

// linkThree.addEventListener('click', () => {
//     img.scr = 'https://www.hellomagazine.com/imagenes/film/20211028123807/horror-films-garunteed-to-give-you-sleepless-nights/0-598-114/horror-t.jpg';
// })

// linkFour.addEventListener('click', () => {
//     img.scr = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-50-most-romantic-movies-of-all-time-titantic-1517604052.jpg';
// })

linkOne.addEventListener('click', () => {
    img.src = 'img/romantic.jpg';
})

linkTwo.addEventListener('click', () => {
    img.src = 'img/comedy.jpg';
})

linkThree.addEventListener('click', () => {
    img.src = 'img/horror.jpg';
})

linkFour.addEventListener('click', () => {
    img.src = 'img/fantasy.jpg';
})
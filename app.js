const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
const placeImg = 'https://dwg-master.ru/wd/i'

let activeSlideIndex = 0;

renderImg();


upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}


function renderImg() {
    const mainCard = document.querySelector(".main-slide");
    for (let i = 1; i < 210; i++) {
      const div = document.createElement("div");
      i += ""; // приводим к тексту
      div.classList.add("main_img");
      if (i.length === 1) div.style = `background-image: url('${placeImg}/00${i}.jpg')`;
      else if (i.length === 2) div.style = `background-image: url('${placeImg}/0${i}.jpg')`;
      else div.style = `background-image: url('${placeImg}/${i}.jpg')`;
      mainCard.append(div);
    }
  }
  
//   function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
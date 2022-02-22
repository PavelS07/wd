const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const pathLink = document.querySelector(".link-download");
const placeImg = "https://dwg-master.ru/wd/i";

let activeSlideIndex = 0;

let slidesCount = 10;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  let imgNumberText = activeSlideIndex + 1 + "";
  let startPoint = activeSlideIndex + 1;
  if (imgNumberText.length === 1) {
    pathLink.href = `${placeImg}/00${startPoint}.jpg`;
  } else if (imgNumberText.length === 2) {
    pathLink.href = `${placeImg}/0${startPoint}.jpg`;
  } else {
    pathLink.href = `${placeImg}/${startPoint}.jpg`;
  }

  if(startPoint%10 === 0) {
    renderImg(startPoint+1);
    slidesCount+=10;
  }
}
function renderImg(startPoint) {
  for (let i = startPoint; i < startPoint+10; i++) {
    const div = document.createElement("div");
    i += ""; // приводим к тексту
    if (i.length === 1) {
      div.style = `background-image: url('${placeImg}/00${i}.jpg')`;
    } else if (i.length === 2) {
      div.style = `background-image: url('${placeImg}/0${i}.jpg')`;
    } else {
      div.style = `background-image: url('${placeImg}/${i}.jpg')`;
    }
    mainSlide.append(div);
  }
}

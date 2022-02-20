const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const pathLink = document.querySelector(".link-download");
const placeImg = "https://dwg-master.ru/wd/i";

let activeSlideIndex = 0;

renderImg();
const slidesCount = mainSlide.querySelectorAll("div").length;

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
  if (imgNumberText.length === 1) {
    pathLink.href = `${placeImg}/00${activeSlideIndex + 1}.jpg`;
  } else if (imgNumberText.length === 2) {
    pathLink.href = `${placeImg}/0${activeSlideIndex + 1}.jpg`;
  } else {
    pathLink.href = `${placeImg}/${activeSlideIndex + 1}.jpg`;
  }
}

function renderImg() {
  const mainCard = document.querySelector(".main-slide");
  for (let i = 2; i < 210; i++) {
    const div = document.createElement("div");
    i += ""; // приводим к тексту
    if (i.length === 1) {
      div.style = `background-image: url('${placeImg}/00${i}.jpg')`;
      div.id = `00${i}`;
    } else if (i.length === 2) {
      div.style = `background-image: url('${placeImg}/0${i}.jpg')`;
      div.id = `0${i}`;
    } else {
      div.style = `background-image: url('${placeImg}/${i}.jpg')`;
      div.id = `${i}`;
    }
    mainCard.append(div);
  }
}

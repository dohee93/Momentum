const body = document.querySelector('body');
const IMG_NUM = 5;

function paintImage(num) {
   const image = new Image();
   image.src = `images/${num}.jpg`;
   body.appendChild(image);
   image.classList.add('bgImage');
}

function genRandom() {
   const number = Math.floor(Math.random() * IMG_NUM) + 1;
   return number;
}

function init(){
   const randomNumber = genRandom();
   paintImage(randomNumber);
}
init();

// 1. 랜덤 넘버를 생성 (랜덤넘버 구하는 함수) = genRandom()
// 2. 해당 번호의 배경 화면에 표시 (배경 표시 함수) = paintImage(imgNumber)


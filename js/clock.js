const clockContainer = document.querySelector(".js-clock"),
   clockTitle = document.querySelector("h1");

function getTime() {
   const date = new Date();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   const seconds = date.getSeconds();
   clockTitle.innerHTML = `${
      hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
   }`;
}

function init() {
   getTime(); // 시간 생성 함수
   setInterval(getTime, 1000); //1초마다 getTime 실행
}
init();


// alert(1);
//이미지 요소(엘러먼트)들을 선택
const first = document.querySelector(".img1");
const second = document.querySelector(".img2");

//번호랜덤
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
console.log(randomNumber2);

// for(let i = 1; i<=100; i++){
// console.log.math.floor(math.random()*10+1);
// }

//이미지 객체에 src 속성의 값을 입력
// first.setAttribute("src", "images/dice6.png");
// second.setAttribute("src", "images/dice1.png");

// 바꿔주기 - >주사위 사진랜덤
first.setAttribute("src", "images/dice" + randomNumber1 + ".png");
second.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// 누가 이겼는지
const h1 = document.querySelector("h1");

if (randomNumber1 < randomNumber2) {
  h1.innerText = "2번이 이김! ";
} else if (randomNumber2 < randomNumber1) {
  h1.innerText = "1번이 이김! ";
} else {
  h1.innerText = "비김! ";
}

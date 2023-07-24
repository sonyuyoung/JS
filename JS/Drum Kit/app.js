const btn1 = document.querySelector("button");
const btns = document.querySelectorAll("button");

// btn1.addEventListener(이벤트종류, 실행함수);

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     alert("클릭됨");
//   });
// }

// btns[0].addEventListener("click", function () {
//     alert("클릭됨");
//   });

// btn1.addEventListener("click", function () {
//   alert("클릭됨");
// });

// function handleClick() {
//   alert("클릭됨!");}
//

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
const key = e.target.textcontent;
    e.target.style.color = "white";
    //    내가 클릭한 드럼의 글자색을 흰색으로 변경
    // 내가 클릭한 드럼의 소리를 냄

   drumPlay(key);    
  document.addEventListener("keydown", function (e) {
        const key = e.key;
        drumPlay(key); 
    
    // if (key === "w") {
    //   const audio = new Audio("sounds/tom-1.mp3");
    //   audio.play();
    // }
    // if (key === "a") {
    //   const audio = new Audio("sounds/tom-2.mp3");
    //   audio.play();
    // }
    // if (key === "s") {
    //   const audio = new Audio("sounds/tom-3.mp3");
    //   audio.play();
    // }
    // if (key === "d") {
    //   const audio = new Audio("sounds/tom-4.mp3");
    //   audio.play();
    // }
    // if (key === "j") {
    //   const audio = new Audio("sounds/snare.mp3");
    //   audio.play();
    // }
    // if (key === "k") {
    //   const audio = new Audio("sounds/crash.mp3");
    //   audio.play();
    // }
    // if (key === "l") {
    //   const audio = new Audio("sounds/kick-bass.mp3");
    //   audio.play();
    // }

    // const audio = new Audio("sounds/tom-1.mp3");
    // audio.play();


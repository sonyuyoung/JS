const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

// 이벤트

// function handleclick() {
//   console.log("클릭했네!");
// }

function handleChange() {
  // console.log("색을 바꿨네!");
  let c1 = color1.value; //유저가 선택한 색
  let c2 = color2.value;
  body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
}

function func() {
  document.getElementById("para1").style.color = "red";
  document.getElementById("para1").innerHTML = "빨간색이 되었네!";
    setTimeout(() document.|"para".style.color='',3000);
}

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

function checkboxes() {
  //console.log("스크롤 했음");
  //화면높이의 3/5 정도 높이를 트리거 포인트로 지정
  const triggerBottom = (window.innerHeight / 5) * 3;

  //트리거 포인트에 박스의 상단 높이가 도달하면은  보이게하고 멀어지면 안보이게 (?)
  boxes.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
//처음시작시 호출

checkboxes();

//검색박스(입력창+버튼)
const search = document.querySelector(".search");
const btn = document.querySelector(".btn"); //버튼
const input = document.querySelector(".input"); //입력창

//버튼 클릭시 search에 active 클래스 토글 (토글: 선택한요소가 보이면 보이지 않게 보이지않으면 보이게 함 )
btn.addEventListener("click", function () {
  search.classList.toggle("active");
  //active클래스를 있음 제거 없으면 추가
  input.focus(); // 입력창 포커스 커서
});

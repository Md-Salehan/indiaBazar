var cartArr = document.querySelectorAll(".addCart");
for (let i = 0; i < cartArr.length; i++) {
  cartArr[i].addEventListener("click", ()=> {
    cartNum();
  });
}

function cartNum() {
  let num = parseInt(localStorage.getItem("cartNum"));
  if (num) {
    localStorage.setItem("cartNum", ++num);
    document.querySelector(".count").textContent = num;
  } else {
    localStorage.setItem("cartNum", 1);
    document.querySelector(".count").textContent = 1;
  }
}

function loadCartNum() {
  let num = parseInt(localStorage.getItem("cartNum"));
  if (num) {
      document.querySelector(".count").textContent = num;
    }
}
loadCartNum();

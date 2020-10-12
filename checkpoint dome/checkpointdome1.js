// decalaration variables
let btnPlus = document.querySelectorAll(".plus");
let btnMoin = document.querySelectorAll(".moin");
let total = document.querySelector("#total");
let prix = document.querySelectorAll(".prix");
let produit = document.querySelectorAll(".produit");
let qt = document.querySelectorAll(".cont");
for (let i = 0; i < btnPlus.ength; i++) {}

// events
//js heart
for (let i = 0; i < btnPlus.length; i++) {
  var heart = document.querySelectorAll(".fa-heart");
  heart[i].style.color = "black";
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color === "black") {
      heart[i].style.color = "red";
    } else {
      heart[i].style.color = "black";
    }
  });
  btnPlus[i].addEventListener("click", function () {
    qt[i].innerHTML++;
    totalPrice()
  });
  btnMoin[i].addEventListener("click", function () {
    if (qt[i].innerHTML > 0) {
      qt[i].innerHTML--;
      totalPrice()
    }
  });
}
function totalPrice() {
  let prix = document.querySelectorAll(".prix");

  let qt = document.querySelectorAll(".cont");
  let som = 0;
  for (let i = 0; i < prix.length; i++) {

      som=som+prix[i].innerHTML*qt[i].innerHTML
  }
  document.getElementById("total").innerHTML=som
}

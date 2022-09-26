let name1 = prompt("1.player Name:"); // 1. oyuncu adını alma
let name2 = prompt("2.player Name:"); // 2. oyuncu adını alma
let container = document.querySelector(".container");
let storage = []; // zarlardan gelen sonuçları buraya kayıt ediyoruz

// yeni button oluşturma, id verme ve sayfaya ekleme
let btn = document.createElement("button");
btn.setAttribute("id", "btn1");
btn.setAttribute("name", "btn1");
btn.innerHTML = "tikla";
container.appendChild(btn);
btn.style.cursor = "pointer";

btn.addEventListener("click", function () {
  // 1. zar için image ve random number
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomImages1 = "images/" + "dice" + randomNumber1 + ".png";
  let image1 = document.querySelectorAll("img")[0]; // html deki ilk img etietkini aldık
  image1.setAttribute("src", randomImages1);
  document.querySelector("#player1").innerHTML = name1.toUpperCase();

  // 2. zar için image ve random number
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);
  let randomImages2 = "images/" + "dice" + randomNumber2 + ".png";
  let image2 = document.querySelectorAll("img")[1]; // html deki ikinci img etietkini aldık
  image2.setAttribute("src", randomImages2);
  document.querySelector("#player2").innerHTML = name2.toUpperCase();
  let depo = [];
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `🚩 ${name1} WİN`;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `${name2} WİN🚩`;
  } else {
    document.querySelector("h1").innerHTML = "DRAW";
  }
  depo.push(randomNumber1, randomNumber2);
  storage.push(depo);

  if (randomNumber1 >= 5) {
    document.querySelector("body").style.backgroundColor = "red";
  } else if (randomNumber2 >= 5) {
    document.querySelector("body").style.backgroundColor = "blue";
  }
});

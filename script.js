let name1 = prompt("1.player Name:")
const randomNumber1 = Math.floor(Math.random()*6+1)
let randomImages1 = "images/" + "dice" + randomNumber1 + ".png"
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages1)
document.querySelector("#player1").innerHTML=name1.toUpperCase()

let name2 = prompt("2.player Name:")

const randomNumber2 = Math.floor(Math.random()*6+1)
let randomImages2 = "images/" + "dice" + randomNumber2 + ".png"
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImages2)
document.querySelector("#player2").innerHTML= name2.toUpperCase()


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML=`🚩 ${name1} WİN`
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML=`${name2} WİN🚩`
} else {
    document.querySelector("h1").innerHTML="DRAW"
}

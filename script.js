
const randomNumber1 = Math.floor(Math.random()*6+1)
let randomImages1 = "images/" + "dice" + randomNumber1 + ".png"
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImages1)


const randomNumber2 = Math.floor(Math.random()*6+1)
let randomImages2 = "images/" + "dice" + randomNumber2 + ".png"
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImages2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Win"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 WİN🚩"
} else {
    document.querySelector("h1").innerHTML="DRAW"
}
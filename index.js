// Dice 1
var num1 = Math.floor((Math.random() * 6) + 1);
var newImg1 = "images/dice" + num1 + ".png";
var img1 = document.getElementsByClassName("img1")[0];

img1.setAttribute("src", newImg1);

// Dice 2
var num2 = Math.floor((Math.random() * 6) + 1);
var newImg2 = "images/dice" + num2 + ".png";
var img2 = document.getElementsByClassName("img2")[0];

img2.setAttribute("src", newImg2);

// Results
var h1 = document.getElementsByTagName("h1")[0];

if (num1 > num2) {
    h1.innerHTML = "Player 1 Wins!";
}   else if(num2 > num1) {
    h1.innerHTML = "Player 2 Wins!";
}   else {
    h1.innerHTML = "Draw!";
}

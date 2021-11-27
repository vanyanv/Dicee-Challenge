//variable that generates a random number between 1 and 6
const max = 6;
const min = 1;
const randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber1);

//using dom manipulation to set an attribute
//grab the what we need to alter
player1 = document.querySelector(".img1");

//use if/else to change the image based on random number
if (randomNumber1 === 1) {
  player1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  player1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  player1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  player1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  player1.setAttribute("src", "images/dice5.png");
} else {
  player1.setAttribute("src", "images/dice6.png");
}

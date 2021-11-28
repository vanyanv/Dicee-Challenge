//variable that generates a random number between 1 and 6
const max = 6;
const min = 1;

//random number for player 1
const randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
//random number for player 2
const randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumber1);
console.log(randomNumber2);

//using dom manipulation to set an attribute
//grab the what we need to alter
player1 = document.querySelector(".img1");
player2 = document.querySelector(".img2");

//use if/else to change the image based on random number for player1
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

//use if/else to change the image based on random number for player2
if (randomNumber2 === 1) {
  player2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  player2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  player2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  player2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  player2.setAttribute("src", "images/dice5.png");
} else {
  player2.setAttribute("src", "images/dice6.png");
}

//select the h1 element and set it as a variable
let h1 = document.querySelector("h1");

//determining the winner
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "Player1 Wins 🏆!";
  console.log("Player1 Wins!");
} else if (randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player2 Wins 🏆!";
  console.log("Player2 Wins!");
} else {
  h1.innerHTML = "Draw!";
  console.log("Draw!");
}

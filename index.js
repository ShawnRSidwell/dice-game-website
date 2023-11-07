let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let image1 = document.getElementsByClassName("img1")[0];
let image2 = document.getElementsByClassName("img2")[0];

switch (randomNumber1) {
  case 1:
    image1.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    image1.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    image1.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    image1.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    image1.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    image1.setAttribute("src", "images/dice6.png");
    break;
}

switch (randomNumber2) {
  case 1:
    image2.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    image2.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    image2.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    image2.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    image2.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    image2.setAttribute("src", "images/dice6.png");
    break;
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

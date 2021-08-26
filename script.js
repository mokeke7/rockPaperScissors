"use strict";

const buttons = document.querySelectorAll('button');
let playerHand = "";
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerHand = button.id;
    game();

  });
});


let point = 0;
let count = 0;


function game() {

    let computerHands = ["rock", "paper", "scissors"];
    // console.log("You: " + playerHand);
    let computerHand = computerHands[Math.floor(Math.random()*computerHands.length)];
    // console.log("COM: " + computerHand);
    const results = document.querySelector("#result");
    const result = document.createElement("p");
    const comHand = document.createElement("p");
    comHand.textContent = "COM: " + computerHand;
    results.appendChild(comHand);
    results.appendChild(result);
    result.style.fontSize = "20px";


    if (playerHand == "rock" && computerHand == "paper" ) {
        result.textContent += "COM won!";

        // console.log("COM won!");
    }
    else if (playerHand == "paper" && computerHand == "scissors") {
        result.textContent += "COM won!";
    }
    else if (playerHand == "scissors" && computerHand == "rock") {
        result.textContent += "COM won!";
    }
    else if (playerHand == "rock" && computerHand == "scissors") {
        result.textContent += "You won!";
        point ++;
    }
    else if (playerHand == "paper" && computerHand == "rock") {
        result.textContent += "You won!";
        point ++;
    }
    else if (playerHand == "scissors" && computerHand == "paper") {
        result.textContent += "You won!";
        point ++;
    }
    else {
        result.textContent += "You're tie!";
    }
    const reset = document.querySelector("#reset");
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetBtn");
    resetBtn.innerHTML = "Reset";
    reset.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
    location.reload();
    })

}

// while (count < 5) {
//     game();
// }

// if (point >= 4) {
//     console.log("your point is " + point + " ;)");
// }
// else if (point == 3) {
//     console.log("your point is " + point + " :)");
// }
// else {
//     console.log("your point is " + point + " :(");

// }
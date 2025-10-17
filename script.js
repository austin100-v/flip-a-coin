const headsBtn = document.querySelector("#heads-btn");
const tailsBtn = document.querySelector("#tails-btn");

const computerImg = document.querySelector("#computer-img");
const para = document.querySelector("#output-text");

function updateComputerImage (choice) {
    if (choice === "heads") {
        computerImg.src = "assets/heads.png";
    } else {
        computerImg.src = "assets/tails.png";
    }
}

function getComputerChoice () {
    let any = Math.random();

    if (any <= 0.5) {
        return "heads";
    } else {
        return "tails";
    }
}

headsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    updateComputerImage(computerSelection);

    if (computerSelection === "heads") {
        para.textContent = "You Won! Are you in the computer's head";
    } else {
        para.textContent = "You Lost! You did not predict what the computer would pick"
    }
});

tailsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    updateComputerImage(computerSelection);

    if (computerSelection === "tails") {
        para.textContent = "You Won! Are you in the computer's head";
    } else {
        para.textContent = "You Lost! You did not predict what the computer would pick"
    }
});

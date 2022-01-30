const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    //selectors
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const reset = document.querySelector(".reset-button");

    //event listeners

    //starts the game
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });

    //resets the game
    reset.addEventListener("click", () => {
      introScreen.classList.remove("fadeOut");
      match.classList.remove("fadeIn");
      introScreen.classList.add("fadeIn");
      match.classList.add("fadeOut");
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button "); //going to select
    // all the buttoms from options
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // we use function here bc then this will return the button that we click on.
        const computerNumber = Math.floor(Math.random() * 3); // generates number between 0 & 3
        const computerChoice = computerOptions[computerNumber];
        // calling the compare function

        // updating the images
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
      });
    });
  };

  // function that compares the computer and player choice and decide the winner
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "it is a tie";
      return;
    }
    // rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        return;
      } else winner.textContent = "Computer Wins";
      return;
    }
    // paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        return;
      } else {
        winner.textContent = "Player Wins";
        return;
      }
    }
    //scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        return;
      } else {
        winner.textContent = "Player Wins";
        return;
      }
    }
  };

  startGame(); //otherwise we will just define the funciton without executing it
  playMatch();
};

game(); //otherwise we will just define the funciton without executing it

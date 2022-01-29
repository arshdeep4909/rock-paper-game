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
  };

  startGame(); //otherwise we will just define the funciton without executing it
};

game(); //otherwise we will just define the funciton without executing it

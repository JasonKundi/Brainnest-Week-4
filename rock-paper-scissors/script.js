  // initialise game counter
  let playerScore = 0;
  let computerScore = 0;

  const game = () => {
    // computer ranoom choice function
    const computerPlay = () => {
      let computerChoices = ["rock", "paper", "scissors"];
      let choice =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];
      return choice;
    };

    // playRound function compares inputs and returns string with winner
    const playRound = (playerSelection, computerSelection) => {
      if (playerSelection.toLowerCase() === computerSelection) {
        return "Tie!";
      }
      if (
        (playerSelection.toLowerCase() === "rock" &&
          computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" &&
          computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" &&
          computerSelection === "paper")
      )
        playerScore++;
      {
        console.log(
          `You win! ${playerSelection} beats ${computerSelection}! Your score is:  ${playerScore}  Computer score is:  ${computerScore}`
        );
      }
      if (
        (computerSelection === "rock" &&
          playerSelection.toLowerCase() === "scissors") ||
        (computerSelection === "paper" &&
          playerSelection.toLowerCase() === "rock") ||
        (computerSelection === "scissors" &&
          playerSelection.toLowerCase() === "paper")
      ) {
        computerScore++;
        console.log(
          `You Lose! ${computerSelection} beats ${playerSelection}! Your score is:  ${playerScore}  Computer score is:  ${computerScore}`
        );
      }
    };
    // Game rounds logic
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt(
        "Choose rock, paper, or scissors"
      ).toLowerCase();
      playRound(playerSelection, computerPlay());
    }
    if (playerScore > computerScore) {
      console.log(`You beat the computer ${playerScore} out of 5 rounds!`);
    } else {
      console.log(
        `Skynet has defeated you ${computerScore} out of 5 rounds, Your final score was: ${playerScore} to Computer's score of ${computerScore}!`
      );
    }
  };

  game();
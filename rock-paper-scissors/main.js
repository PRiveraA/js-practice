// Defines main program
const main = () => {

  // Defines computer choice
  const computerChoice = () => {
    const randomValue = Math.round(Math.random() * 9)

    let choice = undefined

    if (randomValue < 3) {
      choice = "rock"
    } else if (randomValue < 6) {
      choice = "paper"
    } else {
      choice = "scissors"
    }

    return choice
  }

  // Defines player choice
  const playerChoice = () => {
    let choice = prompt("Enter Choice").toLocaleLowerCase().trim()

    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
      choice = prompt("Invalid choice, try again").toLocaleLowerCase().trim()
    }

    return choice
  }

  // Determines winner of round
  const playRound = (playerChoice, computerChoice) => {

    let results = playerChoice + " vs " + computerChoice

    switch (results) {
      case "paper vs rock":
        alert("paper beats rock")
        humanScore++
        break
      case "rock vs paper":
        alert("paper beats rock")
        computerScore++
        break
      case "paper vs scissors":
        alert("scissors beats paper")
        computerScore++
        break
      case "scissors vs paper":
        alert("scissors beats paper")
        humanScore++
        break
      case "scissors vs rock":
        alert("rock beats scissors")
        computerScore++
        break
      case "rock vs scissors":
        alert("rock beats scissors")
        humanScore++
        break
      default:
        alert("tie!")
    }
  }

  // Keeps track of score
  let humanScore = 0
  let computerScore = 0

  //Runs game until either player reach 5 points 
  while (humanScore < 5 && computerScore < 5) {
    playRound(playerChoice(), computerChoice())
  }

  // Determines winner of game
  if (humanScore > computerScore) {
    alert(`You Win!`)
  } else {
    alert(`You Lose!`)
  }

}

// Runs main program
main()
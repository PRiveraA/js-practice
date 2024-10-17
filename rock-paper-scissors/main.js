const main = () => {

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

  const playerChoice = () => {
    let choice = prompt("Enter Choice").toLocaleLowerCase().trim()

    while (!(choice === "rock" || choice === "paper" || (choice === "scissors" || choice === "scissor"))) {
      choice = prompt("Invalid choice, try again").toLocaleLowerCase().trim()
    }

    return choice
  }


  computerChoice()
  playerChoice()

}

main()
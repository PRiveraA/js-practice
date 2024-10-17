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



  computerChoice();

}

main()
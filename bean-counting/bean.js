// Counts number of character B in string
const countBs = (string) => {
  let beanCount = 0
  for (i = 0; i < (string.length); i++) {
    if (string[i] === "B") {
      beanCount++
    }
  }
  return beanCount
}

// Function that takes a string, and a character.Returns the number of times the character appears in the string
const countChar = (string, char) => {
  let charCount = 0
  for (i = 0; i < (string.length); i++) {
    if (string[i] === char) {
      charCount++
    }
  }
  return charCount
}
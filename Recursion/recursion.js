// Function that uses recursion to find whether a number is even or odd

const isEven = (n) => {
  if (n > 1) {
    return isEven(n - 2)
  } else if (n < 0) {
    return isEven(n + 2)
  } else {

    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    }
  }
}
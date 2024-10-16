// Simple log in using Alerts

let userName = prompt('Who\'s there?', '')
let password = "TheMaster"

if (userName === 'Admin') {
  let getPassword = prompt('Password: ', '')
  if (getPassword === password) {
    alert('Welcome')
  } else if ((getPassword == '') || (getPassword == null)) {
    alert('Canceled')
  } else {
    alert('Wrong password')
  }
} else if ((userName == '') || (userName == null)) {
  alert('Canceled')
} else {
  alert('I don\'t know you')
}
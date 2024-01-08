let pick = ["rock", "paper", "scissors"]
function getComputerChoice() {
  let randomPlay = Math.floor(Math.random()*pick.length)
  return pick[randomPlay]
}
console.log(getComputerChoice())
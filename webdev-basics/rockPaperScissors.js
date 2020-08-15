const options = ["paper", "rock", "scissors"]
function rockPaperScissors() {
  let input = window.prompt("What do you want to play? \n1 == Paper\n2 == Rock\n3==Scissors") - 1; 
  let computer = Math.floor(Math.random() * options.length);
  if(computer == input) {
  alert("The computer picked " + options[computer] + " which was the same as you, therefore we have a tie ")
  let rePlay = window.prompt("Since you tied you have the choice to play again, do you want to play again?\n\n1 == Yes\n0 == No")
  if(rePlay == 1)
    rockPaperScissors();
  else
    alert("Fair enough, see you another day!") }
  else if(input+1 == computer || input == 2 && computer == 0)
  alert("You win, you played " + options[input] + " which beats " + options[computer] + " which the computer played");
else
alert("You lose, the computer played " + options[computer] + " which beats your choice of " + options[input] + ".\n\nBetter luck next time!");
}
rockPaperScissors();


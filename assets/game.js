var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];

document.onkeyup = function() {
  var computerThought = alphabet[Math.floor(Math.random()*alphabet.length)];
  console.log(computerThought);

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  letters.push(userGuess);
  document.getElementById("guesses_so_far").innerHTML = "Your Guesses So Far: " + letters;

  if (userGuess == computerThought) {
    wins++;
    document.getElementById("wins:").innerHTML = "wins: " + wins;
    document.getElementById("guesses_so_far").innerHTML = "The letters guessed thus faYour Guesses So Far: ";
  }

  else {
    document.getElementById("guesses_left").innerHTML = "Guesses Left: " + (guesses - 1);
    guesses--;
    console.log(guesses);
  }

  if (guesses == 0) {
    losses++;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    guesses = 10;
    letters = [];
  }
}
let userInput; 
let randomNum = Math.floor(Math.random() * 3);
let validResponses = ['rock', 'paper', 'scissors'];
let computerInput = validResponses[randomNum];

const rpsRules = {
  "rock": "paper",
  "paper": "scissors",
  "scissors": "rock",
}

const rockPaperScissorsStringComparison = (user, computer) => {
  if (user === computer) {
    $(".result").text("draw!");
  } else if (rpsRules[user] === computer) {
    $(".result").text("computer wins!");
  } else if (rpsRules[computer] === user) {
    $(".result").text("you win!!!!!"); 
  } else {
    $(".result").text("no one wins!");
  }
}

$("button").click(() => {
  userInput = $("input").val().toLowerCase();
  if (validResponses.includes(userInput)) {
    $(".userChoice").text(userInput);
    $(".computerChoice").text(computerInput);
    rockPaperScissorsStringComparison(userInput, computerInput);
  } else {
    $(".result").text("Invalid input!");
  }
})


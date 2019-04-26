'use strict';

var questions

// Variables for questions 1-5
var questions = ['Is Suzuki my favourite car manufactuer?', 'Is Android my favourite mobile OS?', ' Is Dancehall my favourite music genre?', 'Is Black my least favourite colour?', 'Do I seldom eat at Subway restaurants?' ];
var replies = ['no', 'yes', 'yes', 'no', 'no'];
var replies_2 = ['n', 'y', 'y', 'n', 'n'];
var score = 0;

// Variables for question 6
var num = 150;
var guess;
var n = 4;
var pkm = 0;

// Variables for 7th question
var options = ['platz', 'corolla', 'auris'];
var s = 6;
var c = 0;

var user = prompt('Hello and welcome to the DGi® Guessing Game! Can you tell me your name, please?').toUpperCase();

greetUser();
askFive();
askSix();
askSeven();





// Function definitions
function greetUser(user) {
    alert("Pleasure to meet you, " + user + "! Let\'s begin! I will ask you five questions about myself. To respond, enter \"y or yes\" OR \"n or no\".");
    console.log(user);
    return user;
}

function askFive() {
    for (var i = 0; i < questions.length; i++) {
        alert('Question ' + (i + 1) + ':');
        var response = prompt(questions[i]).toLowerCase();
        if ((response === replies[i]) || (response === replies_2[i])) {
          alert('You are correct! Well done.');
          score++;
          console.log(response + ' was the correct answer to Question ' + (i + 1) + '.');
        } else {
          alert('You are incorrect! Are you sure you are taking this seriously?!');
          console.log(response + ' was the incorrect answer to Question ' + (i + 1) + '.');
        }
      }
}

function askSix() {
    var i = 5;
    alert('Question ' + (i + 1) + ':');
var num_guess = prompt('I am an old school Pokémon player. Can you guess how many Pokémon I have caught so far?');
if (num_guess == 150) {
    pkm++;
    score++;
    alert('Congrats! You got it correct with only one guess!');
    console.log(num_guess + ' was the correct answer to Question ' + (i + 1) + '.');
} else {
  while ((num_guess != 150) && (n > 1)) {
      n--;
      var guess = prompt('You have ' + n + ' more attempt(s) to get it correct! Guess again!');
      if (guess > num) {
          alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
          console.log(guess + ' was the incorrect answer to Question ' + (i + 1) + '.');
      } else if (guess < num) {
          alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
      } else {
          if (guess > num) {
              alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
            } else if (guess < num) {
            alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
            } else {
              alert('You are absolutely correct! Well done!');
              pkm++;
              score++;
              break;
          }
      }  
  }

  if (pkm > 0) {
      alert('Alright, time for the final question!');
  } else {
    alert('You have reached the maximum number of 4 incorrect attempts! Time for the final question.');  
  }  
}
}

function askSeven() {
    var i = 6
    alert('Question ' + (i + 1) + ':');
var reply = prompt('Toyota has manufactured many different car models over the years. Three of these models are my favourites. Can you guess one of them?').toLowerCase();

if (options.indexOf(reply) !== -1) {
    alert('You got it on the first try! Amazing job!');
    c++;
    score++;
    console.log(reply + ' was the correct answer to Question ' + (i +1) + '.');
} else {
    while ((options.indexOf(reply) === -1) && (s > 1)) {
        s--;
        var retry = prompt('You have ' + s + ' more attempt(s) to get it correct! Guess again!');
        console.log(retry + ' was the incorrect answer to Question ' + (i + 1) + '.');
        if (options.indexOf(retry) !== -1) {
            alert('You finally got it! Good job');
            c++;
            break;
        } else {
            alert('You are still wrong!');
        }
    }
}

if(c > 0) {
    alert('Congrats on completing the game! Proceed to next screen for your final score.');
} else {
    alert('You have reached the maximum of 6 incorrect attempts! Proceed to next screen for your final score.');
}


alert('Game Over! ' + user + ', your final score is: ' + score + ', meaning you got ' + score + ' out of 7 questions correct! Thanks for playing!');
console.log(user + '\'s score is ' + score + '.');
}
'use strict';

// Variables for questions 1-5
var questions = ['Is Suzuki my favourite car manufactuer?', 'Is Android my favourite mobile OS?', ' Is Dancehall my favourite music genre?', 'Is Black my least favourite colour?', 'Do I seldom eat at Subway restaurants?' ];
var replies = ['no', 'yes', 'yes', 'no', 'no'];
var replies_2 = ['n', 'y', 'y', 'n', 'n'];
var score = 0;

// Variables for question 6
var num = 150;
var guess;
var n = 4;

// Variables for 7th question
var options = ['platz', 'corolla', 'auris'];
var s = 6;
var c = 0;

// Questions 1-5
//Prompt user for their name
var user = prompt('Hello and welcome to the DGi® Guessing Game! Can you tell me your name, please?').toUpperCase();
//Greet user
alert("Pleasure to meet you, " + user + "! Let\'s begin! I will ask you five questions about myself. To respond, enter \"y or yes\" OR \"n or no\".");

for (var i = 0; i < questions.length; i++) {
  alert('Question ' + (i + 1) + ':');
  var response = prompt(questions[i]).toLowerCase();
  if ((response === replies[i]) || (response === replies_2[i])) {
    alert('You are correct! Well done.');
    score++;
    console.log(response + ' was the correct answer to the question.');
  } else {
    alert('You are incorrect! Are you sure you are taking this seriously?!');
    console.log(response + ' was the incorrect answer to the question.');
  }
}

// Question 6
alert('Question ' + (i + 1) + ':');
var num_guess = prompt('I am an old school Pokémon player. Can you guess how many Pokémon I have caught so far?');
if (num_guess == 150) {
  score++;
  alert('Congrats! You got it correct with only one guess!'); 
} else {
  while ((num_guess != 150) && (n > 1)) {
      n--;
      var guess = prompt('You have ' + n + ' more attempt(s) to get it correct! Guess again!');
      if (guess > num) {
          alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
      } else if (guess < num) {
          alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
      } else {
          if (guess > num) {
              alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
            } else if (guess < num) {
            alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
            } else {
              alert('You are absolutely correct! Well done!');
              score++;
              break;
          }
      }  
  }
  alert('You have reached the maximum number of 4 incorrect attempts! Game Over!');    
}

// Question 7
alert('Question ' + (i + 2) + ':');
var reply = prompt('Toyota has manufactured many different car models over the years. Three of these models are my favourites. Can you guess one of them?').toLowerCase();

if (options.indexOf(reply) !== -1) {
    alert('You got it on the first try! Amazing job!');
    c++;
    score++;
} else {
    while ((options.indexOf(reply) === -1) && (s > 1)) {
        s--;
        var retry = prompt('You have ' + s + ' more attempt(s) to get it correct! Guess again!');
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
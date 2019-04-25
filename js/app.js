'use strict';

var questions = ['Is Suzuki my favourite car manufactuer?', 'Is Android my favourite mobile OS?', ' Is Dancehall my favourite music genre?', 'Is Black my least favourite colour?', 'Do I seldom eat at Subway restaurants?' ];
var replies = ['no', 'yes', 'yes', 'no', 'no'];
var replies_2 = ['n', 'y', 'y', 'n', 'n'];
var score = 0;

//Prompt user for their name
var user = prompt('Hello and welcome to the DGi® Guessing Game! Can you tell me your name, please?').toUpperCase();
//Greet user
alert("Pleasure to meet you, " + user + "! Let\'s begin! I will ask you five questions about myself and you are to respond with either yes OR no.");

for (var i = 0; i < questions.length; i++) {
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

alert('Game Over! ' + user + ', your final score is: ' + score + ', meaning you got ' + score + ' out of 7 questions correct! Thanks for playing!');


// // Question 6 variables
// // var num = 150;
// // var num_guess = prompt('I am an old school Pokémon player. Can you guess how many Pokémon I have caught so far?');
// // var guess;
// // var n = 4;

// // Question 7 variables
// var options = ['platz', 'yaris', 'corolla'];
// var s = 6;

// // if (num_guess == 150) {
// //     alert('Congrats! You got it correct with only one guess!');
// // } else {
// //     while ((num_guess != 150) && (n > 1)) {
// //         n--;
// //         var guess = prompt('You have ' + n + ' more attempt(s) to get it correct! Guess again!');
// //         if (guess > num) {
// //             alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
// //         } else if (guess < num) {
// //             alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
// //         } else {
// //             if (guess > num) {
// //                 alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
// //               } else if (guess < num) {
// //               alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
// //               } else {
// //                 alert('You are absolutely correct! Well done!');
// //                 break;
// //             }
// //         }  
// //     }
// //     alert('You have reached the maximum number of 4 incorrect attempts! Game Over!');    
// // }

// var reply = prompt('Toyota has several car models that I like. Can you name one of them?').toLowerCase();

// // while ((reply !== options[0]) || (reply !== options[1]) || (reply !== options[2])) {
// //     s--;
// //     var answer = prompt('You have ' + n + ' more attempt(s) to get it correct! Guess again!');
// // }

// while ((reply !== options[i]) && (s > 1)) {
//             s--;
//             var ans = prompt('You have ' + n + ' more attempt(s) to get it correct! Guess again!');
//             if (ans === options[i]) {
//                 alert('Correct bro!');
//             } else if (ans !== options[i]) {
//                 alert('Wrong bro!');
//             } else {
//                 if (guess > num) {
//                     alert('Whoa! Your guess was too high! I have not caught that many Pokémon!');
//                   } else if (guess < num) {
//                   alert('Whoa! Your guess was too low! I have caught more Pokémon than that!');
//                   } else {
//                     alert('You are absolutely correct! Well done!');
//                     break;
//                 }
//             }  
//         }

// for (i=0; i < options.length; i++) {
//     if (reply === options[i]) {
//         alert('Correct');
//         console.log(reply + ' was one of the correct answers.');
//         break;
//     } else {
//         while ((s > 1) && (reply !== options[i])) {
//             s--;
//         alert('Wrong');
//         var re_guess = prompt('Guess again!');
//         console.log(reply + ' was not one of the correct answers.');
//         console.log(s);
//             if (re_guess === options[i]) {
//             alert('You finally got it right!');
//             } else {
//             alert('You are still wrong!');
//             }   
//         }
//     }
// }
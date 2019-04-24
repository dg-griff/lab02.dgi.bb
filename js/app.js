'use strict';

var questions = ['Is Suzuki my favourite car manufactuer?', 'Is Android my favourite mobile OS?', ' Is Dancehall my favourite music genre?', 'Is Black my least favourite colour?', 'Do I seldom eat at Subway restaurants?' ];

var replies = ['no', 'yes', 'yes', 'no', 'no'];

//Prompt user for their name
var user = prompt('Hi there, what is your name?');
//Greet user
alert("Hi " + user + " !");

for (var i = 0; i < questions.length; i++) {
  var response = prompt(questions[i]).toLowerCase();
  if (response === replies[i]) {
    alert('You are correct!');
    console.log(response + ' was the correct answer to the question \"' + questions[i] + '\"');
  } else {
    alert('You are wrong!');
    console.log(response + ' was the incorrect answer to the question \"' + questions[i] + '\"');
  }
}
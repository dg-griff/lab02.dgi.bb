'use strict';

// Prompt user for name
var user = prompt('Hello and welcome to the DGi® Guessing Game! What is your name, please?').toUpperCase();

// Greet User
alert('Pleasure to meet you, ' + user + '! Let\'s begin! I will ask you five questions about me and you are to respond with yes OR no.');

// Ask Five Questions
var response = prompt('Is Suzuki my favourite car manufacturer?').toLowerCase();
if((response === 'no') || (response === 'n')) {
  alert('You are correct! Well done.')
  console.log(response + ' was the correct answer to the question.');
} else {
  alert('You are incorrect! Are you sure that you are taking this seriously?!');
  console.log(response + ' was the incorrect answer to the question.');
}

var response_2 = prompt('Is Android my favourite mobile Operating System?').toLowerCase();
if((response_2 === 'yes') || (response_2 === 'y')) {
  alert('You are correct! Well done.')
  console.log(response_2 + ' was the correct answer to the question.');
} else {
  alert('You are incorrect! Are you sure that you are taking this seriously?!');
  console.log(response_2 + ' was the incorrect answer to the question.');
}

var response_3 = prompt('Is Dancehall my favourite genre of music?').toLowerCase();
if((response_3 === 'yes') || (response_3 === 'y')) {
  alert('You are correct! Well done.')
  console.log(response_3 + ' was the correct answer to the question.');
} else {
  alert('You are incorrect! Are you sure that you are taking this seriously?!');
  console.log(response_3 + ' was the incorrect answer to the question.');
}

var response_4 = prompt('Is Black my least favourite colour to wear?').toLowerCase();
if((response_4 === 'no') || (response_4 === 'n')) {
  alert('You are correct! Well done.')
  console.log(response_4 + ' was the correct answer to the question.');
} else {
  alert('You are incorrect! Are you sure that you are taking this seriously?!');
  console.log(response_4 + ' was the incorrect answer to the question.');
}

var response_5 = prompt('Is Subway the restaurant I eat at least often?').toLowerCase();
if((response_5 === 'no') || (response_5 === 'n')) {
  alert('You are correct! Well done.')
  console.log(response_5 + ' was the correct answer to the question.');
} else {
  alert('You are incorrect! Are you sure that you are taking this seriously?!');
  console.log(response_5 + ' was the incorrect answer to the question.');
}

alert('Game Over! Thanks for playing!');
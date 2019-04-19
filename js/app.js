'use strict';

alert('Welcome to DGi Boss! Let\'s play a game.');

var game_data = [
    {
        // car brands
        question: "Is Suzuki my favourite?",
        reply: "no"
    },

    { 
        // mobile OS
        question: "Is Android my favourite?",
        reply: "yes"
    },

    {   
        // music genres
        question: "Is Dancehall my favourite?",
        reply: "yes"
    },

    {
        // colours
        question: "Is Black my least favourite?",
        reply: "no"
    },

    {
        // restaurants
        question: "Do I eat at Subway the least?",
        reply: "no"
    }
];


// Prompt user for car brand and get response
alert('Question 1: I like three Japanese car brands: Suzuki, Toyota and Mitsubishi. But which one is my favourite? Guess correctly or else!');

var car_answer = prompt('Is Suzuki my favoruite?').toLowerCase();

if ((car_answer === 'y') || (car_answer === 'yes')) {
    alert('You are correct. Be happy you did not get it wrong!');
} else {
    alert('You are wrong! Prepare to suffer the consequences!!!');
}


// Prompt for opsys answer and get response
alert('Question 2: There are two main mobile operating systems: Android or iOS. But which one is my favourite? Guess correctly or else!');

var opsys_answer = prompt("Is Android my favourite?").toLowerCase();

if ((opsys_answer === 'y') || (opsys_answer === 'yes')) {
    alert('You are correct. Be happy you did not get it wrong!');
} else {
    alert('You are wrong! Prepare to suffer the consequences!!!');
}


// Prompt user for music genre and get response
alert('Question 3: There are three popular music genres where I am from: Soca, Dancehall & Reggae. But which one is my favourite? Guess correctly or else! ');

var genre_answer = prompt('Is Dancehall my favourite?').toLowerCase();

if ((genre_answer === 'y') || (genre_answer === 'yes')) {
    alert('You are correct. Be happy you did not get it wrong!');
} else {
    alert('You are wrong! Prepare to suffer the consequences!!!');
}


// Prompt user for colour and get response
alert('Question 4: There are three colours that I like to wear: Black, Navy and Teal. But which one do I like to wear least? Guess correctly or else!');

var colour_answer = prompt ('Is Black my least favourite?').toLowerCase();

if ((colour_answer === 'n') || (colour_answer === 'no')) {
    alert('You are correct. Be happy you did not get it wrong!');
} else {
    alert('You are wrong! Prepare to suffer the consequences!!!');
}


// Prompt user for food choice and get response
alert('Question 5: There are three restaurants that I like to eat at. But which one do I eat at least often? Guess correctly or else!');

var food_answer = prompt ('Do I eat at Subway the least?').toLowerCase();

if ((food_answer === 'n') || (food_answer === 'no')) {
    alert('You are correct. Be happy you did not get it wrong!');
} else {
    alert('You are wrong! Prepare to suffer the consequences!!!');
}














// var cars = ['toyota', 'suzuki', 'mazda'];
// var opsys = ['android', 'iOS'];
// var genre = ['reggae', 'soca', 'dancehall'];
// var colour = ['navy', 'teal', 'black'];
// var food = ['subway', 'chefette', 'chicken_barn'];



// // Loop through cars array
// for (var i = 0; i < cars.length; i++) {
//     if (car_answer === cars[i]) {
//         alert('You are correct. Be happy you did not get it wrong!');
//         break;
//     } else {
//         alert('You are wrong! Prepare to suffer the consequences!!!');
//         break;
//     }
// }


'use strict';

/*

//to slect an element use query selector
//to get content from element : we use textContent

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent = 'Correct Number!');

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value =23;

*/

//Event Listner

//Implementing Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



const displayScore = function(score){
document.querySelector('.score').textContent = score;
};


const displayGuessingNumber = function (number) {
    document.querySelector('.number').textContent = number;
};
const changeBackgroundColor = function (color) {
    document.querySelector("body").style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
    document.querySelector(".number").style.width = width;
}

//the input class has have parameter called value not text Content to access the value of

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //convert false value into true value
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';

    displayMessage('No number!');

    //when player win
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayGuessingNumber(secretNumber);
    
    // document.querySelector('body').style.backgroundColor = '#60b347';

    changeBackgroundColor('#60b347');


    // document.querySelector('.number').style.width = '30rem';
    changeNumberWidth('30rem');
    
    //when guess is too high
    //   } else if (guess > secretNumber) {

    //     if (score > 1) {

    //       document.querySelector('.message').textContent = 'Too High';
    //       score--;
    //       document.querySelector('.score').textContent = score;

    //     } else {
    //       document.querySelector('.message').textContent = 'You Lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //    document.querySelector('.message').textContent  = guess > secretNumber ? "Too high!" : "Too Low";

      displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
      score--;
    
    //   document.querySelector('.score').textContent = score;
        displayScore(score);
    
    } else {
    //   document.querySelector('.message').textContent = 'You Lost the game';
    
    displayMessage("You Lost the game");
    
    // document.querySelector('.score').textContent = 0;
        displayScore(0);
}
  }
  //when guess is too low
  //   else if (secretNumber > guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//CODING CHALLENGE

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  
  
//   document.querySelector('.score').textContent = score;
    displayScore(score);

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';

//   document.querySelector('.message').textContent = 'Start guessing...';

    displayMessage('Start guessing...');

//   document.querySelector('.number').textContent = '?';
  
displayGuessingNumber("?");

  //document.querySelector('body').style.backgroundColor = '#222';
  changeBackgroundColor('#222');
  
//   document.querySelector('.number').style.width = '15rem';
  changeNumberWidth('15rem');
});



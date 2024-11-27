# Projects related to DOM

## Project Link [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (val) {
  val.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'Grey';
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = 'orange';
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


```

## Project 2

```
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML == 'Please enter valid details';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid details';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} and You're underweight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `Your BMI is ${bmi} and You're Normal Weight`;
    } else if (bmi > 24.9) {
      results.innerHTML = `Your BMI is ${bmi} and You're OverWeight`;
    }
  }
});



```

## Project 3

```
let clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

##Project 4
```
let number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let userData = parseInt(userInput.value);
    validateGuess(userData);
  });
}

function validateGuess(userData) {
  if (isNaN(userData) || userData <= 0 || userData > 100) {
    alert('enter valid number');
  } else {
    prevGuess.push(userData);
    if (numGuess === 11) {
      displayGuess(userData);
      displayMsg(`Game Over`);
      endGame();
    } else {
      displayGuess(userData);
    }
  }
}

function checkGuess(userData) {
  if (userData === number) {
    displayMsg(`Your Guess is right`);
    endGame();
  } else if (userData > number) {
    displayMsg(`Your Guess is too high`);
  } else if (userData < number) {
    displayMsg(`Your Guess is too Low`);
  }
}

function displayGuess(userData) {
  userInput.value = '';
  guessSlot.innerHTML += `${userData}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `${msg}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGme">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const nbtn = document.querySelector('#newGme');
  nbtn.value = '';
  nbtn.addEventListener('click', function () {
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = ``;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 4 Repeat
```
let number = Math.random().toFixed(2);

let submit = document.querySelector('#subt');
let guessInput = document.querySelector('#guessField');
let guessCollection = document.querySelector('.guesses');
let remAttempt = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let guessData = [];
let playGame = true;
let guessNum = 1;

const p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let userInput = guessInput.value;
    checkData(userInput);
  });
}

function checkData(userInput) {
  if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    alert('Data is is not in range of 0-100');
  } else {
    guessData.push(userInput);

    if (guessNum === 11) {
      submit.setAttribute('disabled', '');
      remAttempt.innerHTML = 'No more attempts left';
      endGame();
    } else {
      displayData();
    }
  }
}

function displayData() {
  guessCollection.innerHTML = `${guessData}`;
  guessNum++;
  guessInput.value = '';
  remAttempt.innerHTML = `${11 - guessNum}`;
}

function endGame() {
  guessInput.value = '';
  guessData = [];
  remAttempt.innerHTML = '';
  guessCollection.innerHTML = '';
  guessInput.setAttribute('disabled', '');
  p.innerHTML = `<span id = "nGame">Start New Game</span>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  let newGme = document.querySelector('#nGame');
  newGme.value = '';
  newGme.addEventListener('click', function (e) {
    number = parseInt(Math.random() * 100 + 1);

    guessInput.removeAttribute('disabled');
    guessInput.value;
    playGame = true;
    guessData = [];
    guessNum = 1;

    guessCollection.innerHTML = '';
    startOver.removeChild(p);
    remAttempt.innerHTML = ``;
  });
}


```

## Project 4 repeat 
```
let number = Math.random() * 100 + 1;

let guessVal = document.querySelector('#guessField');
let submitVal = document.querySelector('#subt');
let guesses = document.querySelector('.guesses');
let rem = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitVal.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(guessVal.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess === '' || guess < 0 || isNaN(guess)) {
    alert('entered value is incorrect');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMsg('Game Over');
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === number) {
    displayMsg(`You Guessed it right`);
  } else if (guess > number) {
    displayMsg(`Your Guessed is higher`);
  } else if (guess < number) {
    displayMsg(`You Guessed it lower`);
  }
}

function displayGuess(guess) {
  guessVal.value = '';
  guesses.innerHTML += `${guess},`;
  rem.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  guessVal.value = '';
  guessVal.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.append(para);
  playGame = false;
  newGame();
}

function newGame() {
  let paradata = document.querySelector('#newGame');
  paradata.addEventListener('click', function (e) {
    number = Math.random() * 100 + 1;
    guessVal.innerHTML = '';
    prevGuess = [];
    numGuess = 1;
    rem.innerHTML = `${11 - numGuess}`;
    guesses.innerHTML = '';
    startOver.removeChild(para);
    guessVal.removeAttribute('disabled');
    playGame = true;
  });
}


```

## Project 5

```
function colorCode() {
  let hexVal = '1234567890abcdef';
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    hex += hexVal[Math.floor(Math.random() * 16)];
  }
  return hex;
}

let data;
document.querySelector('#start').addEventListener('click', function () {
  if (!data) {
    data = setInterval(color, 1000);
  }

  function color() {
    document.body.style.backgroundColor = colorCode();
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(data);
  // data = null;
});


```
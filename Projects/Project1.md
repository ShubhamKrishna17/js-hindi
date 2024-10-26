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
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  // Check if height or weight is NaN or less than or equal to zero
  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please enter a valid height and weight';
  } else {
    let bmi = (result.innerHTML = (
      weight /
      ((height * weight) / 10000)
    ).toFixed(2));

    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi >= 18.6) {
      result.innerHTML += '<br>overweight';
    } else if (bmi >= 18.6 && bmi <= 25) {
      result.innerHTML += '<br>Normal';
    } else {
      result.innerHTML += '<br>underweight';
    }
  }
});



```

## Project 3

```
const clock = document.querySelector('#clock');

setInterval(() => {
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
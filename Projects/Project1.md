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


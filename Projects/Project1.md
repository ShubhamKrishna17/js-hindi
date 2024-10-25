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




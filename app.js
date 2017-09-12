const counter = document.querySelector('.counter h1');
const controls = document.querySelectorAll('.controls');

const decrement = controls[0];
const increment = controls[1];

increment.addEventListener('click', () => updateCounter(+1))

decrement.addEventListener('click', () => updateCounter(-1))

function updateCounter(num) {
  let counterInt = parseInt(counter.innerText);
  counterInt = counterInt + num;
  counter.innerText = counterInt;
}
const counter = document.querySelector('.counter h1');
const controls = document.querySelectorAll('.controls');

const decrement = controls[0];
const increment = controls[1];

increment.addEventListener('click', function() {
  console.log(counter);
  let counterInt = parseInt(counter.innerText);
  console.log(counterInt)
  counterInt = counterInt + 1;
  counter.innerText = counterInt;
})

decrement.addEventListener('click', function() {
  let counterInt = parseInt(counter.innerText);
  counterInt = counterInt - 1;
  counter.innerText = counterInt;
})
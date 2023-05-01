// Event Listeners

/*  element.addEventListener("click", () => {

}) */

const buttonTwo = document.querySelector(".btn2")

function alertBtn() {
  alert('I also love JS');
}

 buttonTwo.addEventListener("click", alertBtn)

/*  Mouseover */
const newBackgroundColor = document.querySelector('.three');
const btn3 = document.querySelector('.btn3');

function changeBgColor(){
  newBackgroundColor.style.backgroundColor = 'red';
}

btn3.addEventListener('click', changeBgColor);
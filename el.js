// Event Listeners

/*  element.addEventListener("click", () => {

}) */

const buttonTwo = document.querySelector(".btn-2")

function alertBtn() {
  alert('I also love JS');
}

 buttonTwo.addEventListener("click", alertBtn)
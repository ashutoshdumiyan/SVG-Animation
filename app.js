const buttons = document.querySelectorAll("button");
const dog = document.querySelector(".dog");
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', myFunction);
}

function myFunction() {
    let name = this.getAttribute("data-add");
    let name2 = this.getAttribute("data-remove");
    dog.classList.add(`${name}`);
    dog.classList.remove(`${name2}`);
}
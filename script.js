const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

buttons.forEach((button) => {
  if (button.innerText === "=") {
    button.onclick = () => {
      input.value = eval(input.value.replaceAll("×", "*").replaceAll("÷", "/"));
    }
  } else if (button.innerText === 'C'){
    button.onclick = () => {
      input.value = "";
    }
  } else {
    button.onclick = () => {
      input.value += button.innerText;
    }
  }
});

input.onkeydown = function (e) {
  if (e.key === "Enter") {
    input.value = eval(input.value);
  }
};
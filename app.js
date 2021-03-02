let count = 0;
let periodicCounter = 0;
/* Select all the buttons together */
const counterValue = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.currentTarget.id === "decrease") {
      clearInterval(periodicCounter);
      count--;
    } else if (e.currentTarget.id === "reset") {
      clearInterval(periodicCounter);
      count = 0;
    } else if (e.currentTarget.id === "increase") {
      clearInterval(periodicCounter);
      count++;
    } else if (e.currentTarget.id === "periodic") {
      periodicCounter = setInterval(() => {
        count++;
        if (count < 0) {
          counterValue.style.color = "red";
        } else if (count > 0) {
          counterValue.style.color = "blue";
        } else if (count === 0) {
          counterValue.style.color = "black";
        }
        counterValue.textContent = count;
      }, 1000);
    }

    if (count < 0) {
      counterValue.style.color = "red";
    } else if (count > 0) {
      counterValue.style.color = "blue";
    } else if (count === 0) {
      counterValue.style.color = "black";
    }
    counterValue.textContent = count;
  });
});

/* If you want to select buttons one by one */
// const decreaseButton = document.getElementById("decrease");
// const resetButton = document.getElementById("reset");
// const increaseButton = document.getElementById("increase");
// const counterValue = document.getElementById("value");

// decreaseButton.addEventListener("click", () => {
//   counterValue.textContent -= 1;
// });

// resetButton.addEventListener("click", () => {
//   counterValue.textContent = 0;
// });

// increaseButton.addEventListener("click", () => {
//   counterValue.textContent += parseInt(1);
// });

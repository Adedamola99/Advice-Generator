const adviceText = document.querySelector(".text");
const number = document.querySelector(".adviceNo");
const diceBtn = document.querySelector(".dice-container");
let errorMessage;

async function fetchData() {
  diceBtn.classList.add("animate");
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const quizData = await response.json();
    adviceText.textContent = `"${quizData.slip.advice}"`;
    number.textContent = `Advice #${quizData.slip.id}`;
    diceBtn.classList.remove("animate");
  } catch (error) {
    diceBtn.classList.remove("animate");
    adviceText.textContent = error.message;
    console.error(`Error fetching data: ${error.message}`);
  }
}

diceBtn.addEventListener("click", () => {
  fetchData();
});

fetchData();

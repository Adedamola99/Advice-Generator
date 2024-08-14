const adviceText = document.querySelector(".text");
const number = document.querySelector(".adviceNo");
const diceBtn = document.querySelector(".dice-container");

async function fetchData() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const quizData = await response.json();
        adviceText.textContent = `"${quizData.slip.advice}"`;
        number.textContent = `Advice #${quizData.slip.id}`;
        console.log(quizData);
    } catch (error) {
        console.error();
    }
}

diceBtn.addEventListener("click", () => {
    fetchData();
})



fetchData();
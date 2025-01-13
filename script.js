const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const body = document.querySelector("body");


// Funkcja otwierająca/zamykająca menu
hamMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Zapobiega zamknięciu menu podczas klikania w ikonę
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Funkcja zamykająca menu po kliknięciu poza obszar menu
body.addEventListener("click", () => {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
});

// Zapobiegaj zamknięciu, gdy klikniesz wewnątrz menu
offScreenMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

function showImage(img) {
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');
    
    fullImage.src = img.src; 
    fullImageContainer.style.display = 'flex'; 
}


function closeImage() {
    const fullImageContainer = document.getElementById('fullImageContainer');
    fullImageContainer.style.display = 'none'; 
}
document.getElementById('submit-btn').addEventListener('click', function () {
    const answers = {
        q1: "Wielka Piramida w Gizie",
        q2: "Turcja",
        q3: "Antypater z Sidonu",
        q4: ["Latarnia morska w Faros", "Kolos Rodyjski"],
        q5: "2007",
        q6: ["monumentalność", "techniczne innowacje", "znaczenie religijne"],
        q7: "Latarnia morska w Faros",
        q8: "Pomagała żeglarzom w nawigacji",
        q9: "Halikarnas (Turcja)",
        q10: "Świadectwo osiągnięć cywilizacji"
    };

    let score = 0;
    const form = document.forms["quiz-form"];
    const result = document.getElementById('result');

    // Pytanie 1
    if (form.q1.value === answers.q1) score++;

    // Pytanie 2
    if (form.q2.value === answers.q2) score++;

    // Pytanie 3
    if (form.q3.value.toLowerCase().includes(answers.q3.toLowerCase())) score++;

    // Pytanie 4
    const q4Values = Array.from(form.q4)
        .filter(input => input.checked)
        .map(input => input.value);
    if (JSON.stringify(q4Values.sort()) === JSON.stringify(answers.q4.sort())) score++;

    // Pytanie 5
    if (form.q5.value === answers.q5) score++;

    // Pytanie 6
    if (answers.q6.some(term => form.q6.value.toLowerCase().includes(term))) score++;

    // Pytanie 7
    if (form.q7.value === answers.q7) score++;

    // Pytanie 8
    if (form.q8.value.toLowerCase().includes(answers.q8.toLowerCase())) score++;

    // Pytanie 9
    if (form.q9.value === answers.q9) score++;

    // Pytanie 10
    if (form.q10.value.toLowerCase().includes(answers.q10.toLowerCase())) score++;

    result.textContent = `Twój wynik: ${score}/10`;
});

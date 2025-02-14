const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const responseText = document.getElementById("response");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

// Función para abrir la carta y hacer que aparezcan corazones
function openLetter() {
    envelope.style.display = "none"; 
    letter.classList.remove("hidden"); 
    createHearts();
}

// Mueve el botón "No" aleatoriamente al intentar tocarlo
noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Si presionan "Sí"
yesBtn.addEventListener("click", function () {
    responseText.classList.remove("hidden");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Función para crear corazones flotantes
function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
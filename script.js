let plsCount = 0;

function redirectToMessage() {
    window.location.href = "message.html";
}

function increasePlsCount() {
    plsCount++;
    let plsMessage = document.getElementById('plsMessage');
    plsMessage.style.display = 'block';
    plsMessage.innerHTML = `Please forgive me! 🙏 (x${plsCount})`;
}

function createHearts() {
    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        document.body.appendChild(heart);
    }
}
createHearts();

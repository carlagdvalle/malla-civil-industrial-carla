

document.querySelectorAll('.ramo').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('tachado');
        const star = document.createElement("div");
        star.className = "estrellita";
        star.innerText = "✨";
        btn.appendChild(star);
        setTimeout(() => star.remove(), 1000);
    });
});

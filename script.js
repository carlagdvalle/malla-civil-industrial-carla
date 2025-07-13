
document.querySelectorAll('.ramo').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('bloqueado')) {
            btn.style.backgroundColor = "#d2f8d2";
            // Mostrar estrellitas de sorpresa
            const star = document.createElement("div");
            star.className = "estrellita";
            star.innerText = "✨";
            btn.appendChild(star);
            setTimeout(() => star.remove(), 1000);

            const toUnlock = btn.dataset.desbloquea;
            if (toUnlock) {
                toUnlock.split(";").forEach(id => {
                    const target = document.getElementById(id.trim());
                    if (target) {
                        target.classList.remove('bloqueado');
                    }
                });
            }
        }
    });
});

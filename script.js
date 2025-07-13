
document.querySelectorAll('.ramo').forEach(btn => {
    btn.addEventListener('click', () => {
        const isTachado = btn.classList.toggle('tachado');

        // Mostrar estrellita
        const star = document.createElement("div");
        star.className = "estrellita";
        star.innerText = "✨";
        btn.appendChild(star);
        setTimeout(() => star.remove(), 1000);

        // Desbloquear otros si están en data-desbloquea
        const toUnlock = btn.dataset.desbloquea;
        if (toUnlock) {
            toUnlock.split(";").forEach(id => {
                const target = document.getElementById(id.trim());
                if (target) {
                    if (isTachado) {
                        target.classList.remove('bloqueado');
                    } else {
                        // Si se destacha el ramo, se vuelve a bloquear
                        target.classList.add('bloqueado');
                        target.classList.remove('tachado');
                    }
                }
            });
        }
    });
});

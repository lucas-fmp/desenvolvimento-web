function toggleMenu() {
    const menu = document.getElementById('menu');
    if (!menu) return;
    menu.classList.toggle('active');
}

async function loadHeader() {
    const container = document.getElementById('shared-header');
    if (!container) return;

    try {
        const response = await fetch('header.html');
        if (!response.ok) throw new Error('Falha ao carregar header: ' + response.status);
        container.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('DOMContentLoaded', loadHeader);

document.addEventListener('DOMContentLoaded', function() {
    const projetosSection = document.getElementById('projetos');
    if (projetosSection) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Mostrar Projetos';
        toggleButton.addEventListener('click', function() {
            projetosSection.style.display = projetosSection.style.display === 'none' ? 'block' : 'none';
            toggleButton.textContent = projetosSection.style.display === 'none' ? 'Mostrar Projetos' : 'Ocultar Projetos';
        });
        projetosSection.style.display = 'none'; // Oculta por padrão
        document.querySelector('main').insertBefore(toggleButton, projetosSection);
    }
});

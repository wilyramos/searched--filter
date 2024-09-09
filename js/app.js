document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const filterForm = document.getElementById('filterForm');

    toggleButton.addEventListener('click', () => {
        if (filterForm.style.display === 'none' || !filterForm.style.display) {
            filterForm.style.display = 'block';
            toggleButton.textContent = 'Ocultar Filtros';
        } else {
            filterForm.style.display = 'none';
            toggleButton.textContent = 'Mostrar Filtros';
        }
    });
});

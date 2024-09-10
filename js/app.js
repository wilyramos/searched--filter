document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const filterForm = document.getElementById('filterForm');


    const spinner = document.querySelector('#spinner');


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


// selects 

const brand = document.querySelector('#brand');
const price = document.querySelector('#price');
const year = document.querySelector('#rating');
const gender = document.querySelector('#gender');
const type = document.querySelector('#type');
const size = document.querySelector('#size');



console.log(brand);
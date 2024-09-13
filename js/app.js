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

const listproducts = document.querySelector('#list-products');




// data for the search

const dataSearch = {
    brand: '',
    price: '',
    year: '',
    gender: '',
    type: '',
    size: ''
}

// event listeners xxx

document.addEventListener('DOMContentLoaded', () => {
    brand.addEventListener('input', e => {
        dataSearch.brand = e.target.value;
    });

    price.addEventListener('input', e => {
        dataSearch.price = e.target.value;
    });

    year.addEventListener('input', e => {
        dataSearch.year = e.target.value;
    });

});


function showProducts(){
    // const listproducts = document.querySelector('#list-products');
    clearHTML();
    
}

function clearHTML(){

    while(listproducts.firstChild){
        listproducts.removeChild(listproducts.firstChild);
    }
    
}
console.log(brand);
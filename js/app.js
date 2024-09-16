document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const filterForm = document.getElementById('filterForm');


    const spinner = document.querySelector('#spinner');


    // toggleButton.addEventListener('click', () => {

    //     if (filterForm.style.display === 'none' || !filterForm.style.display) {
    //         filterForm.style.display = 'block';
    //         toggleButton.textContent = 'Ocultar Filtros';
    //     } else {
    //         filterForm.style.display = 'none';
    //         toggleButton.textContent = 'Mostrar Filtros';
    //     }
    // });
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
    showProducts();






});


function showProducts() {
    clearHTML();


    productContainer = document.querySelector('#product-container');
    products.forEach(store => {
        const { id, name, category, rating, price, location, openNow } = store;
        const storeHTML = document.createElement('div');
        storeHTML.classList.add('store');
        storeHTML.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title
                ">${name}</h5>
                <p class="card-text">${category}</p>
                <p class="card-text">${rating}</p>
                <p class="card-text">${price}</p>
                <p class="card-text">${location}</p>
                <p class="card-text">${openNow}</p>
            </div>
        </div>
        `;
        productContainer.appendChild(storeHTML);
        
    });
    // stores.forEach(store => {
}

function clearHTML() {

    productContainer = document.querySelector('#product-container');

    while (productContainer.firstChild) {
        productContainer.removeChild(productContainer.firstChild);
    }

}
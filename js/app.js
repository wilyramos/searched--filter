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
const rating = document.querySelector('#rating');
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
    size: '',
    rating: ''
}

// event listeners xxx

document.addEventListener('DOMContentLoaded', () => {
    showProducts(products);
});

// event listeners for the selects

rating.addEventListener('input', e => {
    dataSearch.rating = Number(e.target.value);
    filterProducts();
}); 


function filterProducts() {
    const result = products.filter(filterRating);
    showProducts(result);

}

function filterRating (product) {
    if (dataSearch.rating) {
        console.log(product);
        return product.rating === dataSearch.rating;
        

    } else {
        
        console.log(product);
        return product;
    }

    
}




function showProducts(products) {
    clearHTML();
    productContainer = document.querySelector('#product-container');
    products.forEach(product => {
        const { id, name, category, rating, price, location, openNow } = product;
        const storeHTML = document.createElement('div');
        storeHTML.classList.add('product');
        storeHTML.innerHTML = `
            <div class="product-info">
                <p class="product-name">${name}</p>
                <p class="product-category">${category}</p>
                <p class="product-rating">${rating}</p>
                <p class="product-price">${price}</p>
                <p class="product-location">${location}</p>
                <p class="product-openNow">${openNow}</p>
            </div>
            <div class="product-actions">
                <button class="product-edit">Editar</button>
                <button class="product-delete">Eliminar</button>
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
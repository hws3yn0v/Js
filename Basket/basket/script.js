let productList = JSON.parse(localStorage.getItem('products'));

if (productList.length > 0) {
    document.querySelector('.alert').classList.add('d-none')
}
else {
    document.querySelector('.alert').classList.remove('d-none')
}

function getProducts() {
    let x = '';

    productList.forEach(item => {
        x += `
        <div class="col-lg-3">
            <div id=${item.Id} class="card">
             <img src=${item.Image} alt="">
                <div class="card-body">
                 <h5 class="card-title">${item.Name}</h5>
                 <p>${item.Price}</p>
                 <a href="#" class="btn btn-danger">Məhsulu sil</a>
                </div>
            </div>
        </div>
        `
    });

    document.querySelector('.rowlist').innerHTML = x;
    getProducts();-
}
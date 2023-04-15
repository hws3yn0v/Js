if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn1')
console.log(buttons);


for (let btn1 of buttons) {
    btn1.onclick = function (e) {
        e.preventDefault();
        let id = this.parentElement.parentElement.parentElement.id;
        console.log(id);
        let src = this.parentElement.previousElementSibling.src;
        console.log(src);
        let productName = this.previousElementSibling.innerHTML;
        console.log(productName);
        let productPrice = this.previousElementSibling.previousElementSibling.innerHTML;
        console.log(productPrice);
        let productList = JSON.parse(localStorage.getItem('products'));


        let existProduct = productList.find(item => item.Id === id);
        console.log(existProduct);



        if (existProduct === undefined) {
            productList.push({
                Id: id,
                Image: src,
                Name: productName,
                Price: productPrice,
                Count: 1
            })
            console.log("Salam");
            document.querySelector('.alertbox').getElementsByClassName.display = 'block'
            document.querySelector('.alertbox').innerHTML = 'Məhsul Səbətə Daxil Edldi'
        }
        else {
            existProduct.Count += 1
            console.log("sagol");
            document.querySelector('.alertbox').getElementsByClassName.display = 'block'
            document.querySelector('.alertbox').innerHTML = 'Məhsulun Sayı  Artıtıldı'

        }


        localStorage.setItem('products', JSON.stringify(productList))
        showCount();


        setTimeout(() => {
            document.querySelector('.alertbox').getElementsByClassName.display = 'none'
        }, 3500);

    }
}

function showCount() {
    let productList = JSON.parse(localStorage.getItem('products')).length;
    document.querySelector('#count p').innerHTML = productList
}

showCount();


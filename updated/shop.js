
var Products = [
    {
        'id': 1, image: 'Images/IMG-20240623-WA0021-removebg-preview.png', price: 20000, title: 'Black Isi Agu Igbo Fabric'
    },
    {
        'id': 2, image: 'Images/Dl8SFJhWsAAopDN-removebg-preview.png', price: 15000, title: 'Coral Orange Red Neck & Hand Bead'
    },
    {
        'id': 3, image: 'Images/aso ofi multi.png', price: 30000, title: 'Multicolor strip Aso ofi'
    },
    {
        'id': 4, image: 'Images/isi_agu_wine1080x1440.png', price: 20000, title: 'Wine Isi Agu Igbo Fabric'
    },
    {
        'id': 5, image: 'Images/IMG-20240627-WA0016-removebg-preview.png', price: 20000, title: 'Blue Color Hausa Fabric'
    },
    {
        'id': 6, image: 'Images/Ofi7-removebg-preview (1).png', price: 25000, title: 'Silver Red Aso Ofi'
    },
    {
        'id': 7, image: 'Images/beads7-removebg-preview.png', price: 10000, title: 'White Neck Bead'
    },
    {
        'id': 8, image: 'Images/red fabric.webp', price: 20000, title: 'Red Isi Agu Fabric'
    },
    {
        'id': 9, image: 'Images/aso ofi 2.png', price: 25000, title: 'Red Black & White Aso Ofi'
    },
    {
        'id': 10, image: 'Images/IMG-20240627-WA0012__1_-removebg-preview.png', price: 15000, title: 'White Plain Fabric'
    },
    {
        'id': 11, image: 'Images/IMG-20240623-WA0019.jpg', price: 30000, title: 'Red Igbo Isi Agu Fabric'
    },
    {
        'id': 12, image: 'Images/IMG-20240627-WA0019__1_-removebg-preview.png', price: 15000, title: 'Purple Plain Fabric'
    },
    {
        'id': 13, image: 'Images/color aso ofi.png', price: 20000, title: 'MultiColored Aso Ofi'
    },
    {
        'id': 14, image: 'Images/handbeads2-removebg-preview.png', price: 5000, title: 'Blue & Red Hand Bead'
    },
    {
        'id': 15, image: 'Images/handbead3.png', price: 5000, title: 'Cream Coral Orange Red Hand Bead'
    },
    {
        'id': 16, image: 'Images/IMG-20240627-WA0002-removebg-preview.png', price: 20000, title: 'Plain Color Hausa Fabric'
    },
];

const body = document.querySelector('body')
const ProductItem = document.getElementById('ProductItem')
shoppingBasket = document.querySelector('.shoppingBasket')
close = document.querySelector('.close')
prodList = document.querySelector('.prodList')
quantity = document.querySelector('.quantity')
totPrice = document.querySelector('.totPrice')

const inputSearch = document.getElementById('inputSearch');
const searchButton = document.querySelector('.searchButton');

let checkOutList = [];

shoppingBasket.onclick = () => {
    body.classList.add('active')
};

close.onclick = () => {
    body.classList.remove('active')
};

function displayProducts(products) {
    ProductItem.innerHTML = ""; // Clear existing products
    products.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <div class="productItem">
                <div class="overlayDiv">
                    <a href="#!" class="productLink">
                        <img src="${item.image}" alt="" srcset="">
                    </a>
                </div>
                <div class="productInfo">
                    <span class="tiTle">${item.title}</span>
                    <h5>₦${item.price}</h5>
                    <button onclick="addToCart(${key})" class="cartBtn">
                        ADD TO CART
                    </button> 
                </div>
            </div>
        `;
        ProductItem.appendChild(div);
    });
}
displayProducts(Products);



// add to cart
function addToCart(Id) {
    if (checkOutList[Id] == null) {
        checkOutList[Id] = Products[Id];
        checkOutList[Id].quantity = 1;
    } else {
        checkOutList[Id].quantity += 1;
    }
    reloadCart();
}




function reloadCart() {
    prodList.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    checkOutList.forEach((item, key) => {
        totalPrice += parseInt(item.price * item.quantity);
        count += item.quantity;
        let li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="" srcset="">   
            <div>${item.title}</div>
            <div>₦${item.price}</div>
            <div>
                <button onclick="change(${key}, ${item.quantity - 1})">-</button>
                <div class="count">${item.quantity}</div>
                <button onclick="change(${key}, ${item.quantity + 1})">+</button>
            </div>
        `;
        prodList.appendChild(li);
    });
 totPrice.innerHTML = `<small>SUBTOTAL (${count} items)  :  ₦ </small>` + totalPrice;
 
 const total = totalPrice
 localStorage.setItem('totalAmount', JSON.stringify(total))
 console.log(total)
quantity.innerHTML = count;
}








function change(key, quantity) {
    if (quantity == 0) {
        delete checkOutList[key];
    } else {
        checkOutList[key].quantity = quantity;
    }
    reloadCart();
}









searchButton.addEventListener('click', (e) => {
    let searchValue = inputSearch.value;

    if (searchValue !== "") {
        let searchCategory = Products.filter(function (item) {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        if (searchCategory.length > 0) {
            displayProducts(searchCategory);
        } else {
            alert("No products found!");
            displayProducts(Products); // display all products if no match is found
        }

        inputSearch.value = "";
    } else {
        alert("Please input a title!");
    }
});







// products.push()







// paystack

$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('#menu').toggleClass("active")
    })
    })
    let Menu = document.getElementById('Menu-Id');
    function toggleMenu (){
        Menu.classList.toggle("open-menu");
    }
 
 

    const Dashboard = document.getElementById("Nav_Dashboard")
    const New_Products = document.getElementById("Nav_add_product")
    const Review = document.getElementById("Nav_customers")
    const Profile = document.getElementById("Profile")
    const Orders = document.getElementById('Nav_Order_list')
    
    let interface = document.querySelector(".interface")
    let orderPage = document.querySelector('.orderConfirmation')
    let Product_Container = document.querySelector(".product_container")
    let Review_body = document.querySelector(".Review-page")
    let Profile_body = document.querySelector(".profile-body")
   Dashboard.addEventListener("click",()=>{
    interface.style.display = "block"
    Product_Container.style.display = "none"
    Review_body.style.display = "none"
    Profile_body.style.display = "none"
    orderPage.style.display= "none"

   })
   Orders.addEventListener('click', () =>{
    orderPage.style.display= "block"
    interface.style.display = "none"
    Product_Container.style.display = "none"
    Review_body.style.display = "none"
    Profile_body.style.display = "none"
   })


   New_Products.onclick = () => {
    Product_Container.style.display = "block"
    interface.style.display = "none"
    Review_body.style.display = "none"
    Profile_body.style.display = "none"
    orderPage.style.display= "none"

   };
Review.onclick = () =>{
    Review_body.style.display = "block"
    Product_Container.style.display = "none"
    interface.style.display = "none"
    Profile_body.style.display = "none"
    orderPage.style.display= "none"

};
Profile.onclick = () => {
    Profile_body.style.display = "block"
    Review_body.style.display = "none"
    Product_Container.style.display = "none"
    interface.style.display = "none"
    orderPage.style.display= "none"

}

// coming

var Navitems = document.querySelectorAll("#items li");
Navitems.forEach(function(item){
    item.addEventListener("click", function(){
        Navitems.forEach(function(item){
            item.classList.remove("active");
        });
        this.classList.add("active");
    })
})



// customer orders
document.addEventListener('DOMContentLoaded', function() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersDiv = document.getElementById('orders');

    if (orders.length > 0) {
        let ordersHtml = '<ul>';
        orders.forEach(order => {
            let itemsHtml = '<ul>';
            order.items.forEach(item => {
                itemsHtml += `
                    <li>
                        <img src="${item.image}" alt="${item.title}" style="width: 50px; height: auto;">
                        <div>${item.title}</div>
                        <div>₦${item.price}</div>
                        <div>Quantity: ${item.quantity}</div>
                    </li>
                `;
            });
            itemsHtml += '</ul>';

            ordersHtml += `
                <li>
                    <h2>Order ID: ${order.id}</h2>
                    <p>Reference: ${order.reference}</p>
                    <p>Total Amount: ₦${order.totalAmount / 100}</p>
                    <p>Email: ${order.email}</p>
                    <p>Items:</p>
                    ${itemsHtml}
                </li>
            `;
        });
        ordersHtml += '</ul>';
        ordersDiv.innerHTML = ordersHtml;
    } else {
        ordersDiv.innerHTML = '<p>No orders available.</p>';
    }
});
















    // Handle form submission for adding new products
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').files[0];
        const productId = document.getElementById('product-id').value;
        const productCategory = document.getElementById('product-category').value;

        if (productName && productPrice && productImage && productId && productCategory) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newProduct = {
                    id: parseInt(productId),
                    title: productName,
                    price: parseInt(productPrice),
                    image: e.target.result,
                    category: productCategory
                };

                saveProduct(newProduct);
                displayProducts(getAllProducts());
                document.getElementById('product-form').reset(); // Clear form fields
            };
            reader.readAsDataURL(productImage);
        }
    });
});

function saveProduct(newProduct) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
}


// to return home
let Home = document.getElementById("Home")
Home.addEventListener("click",()=>{
    window.location.href = "shop.html"
})
let logOut = document.getElementById("Nav-logout")
logOut.addEventListener ("click", ()=>{
    window.location.href = "index.html"
})



// getting items from reviews
window.onload = function() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => displayReview(review));
};

function displayReview(review) {
    const reviewList = document.getElementById('review-list');
    const reviewItem = document.createElement('li');
    const reviewDetails = document.createElement('div');
    reviewDetails.innerHTML = `<strong>${review.customerName}</strong>: ${review.reviewText}`;
    reviewItem.appendChild(reviewDetails);
    
    if (review.imageData) {
        const img = document.createElement('img');
        img.src = review.imageData;
        reviewItem.insertBefore(img, reviewDetails);
    }
    reviewList.appendChild(reviewItem);
}






// vendor profile
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vendorName = document.getElementById('vendor-name').value;
    const vendorEmail = document.getElementById('vendor-email').value;
    const vendorPhone = document.getElementById('vendor-phone').value;
    const vendorDescription = document.getElementById('vendor-description').value;
    const vendorImage = document.getElementById('vendor-image').files[0];
    if (vendorName && vendorEmail && vendorPhone && vendorDescription && vendorImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-img').src = e.target.result;
            document.getElementById('profile-container').classList.add('hidden');
            document.getElementById('profile-display').classList.remove('hidden');
       
        };
        reader.readAsDataURL(vendorImage);
        document.getElementById('profile-name').textContent = `Name: ${vendorName}`;
        document.getElementById('profile-email').textContent = `Email: ${vendorEmail}`;
        document.getElementById('profile-phone').textContent = `Phone: ${vendorPhone}`;
        // document.getElementById('profile-description').textContent = `Description: ${vendorDescription}`;
        document.getElementById('profile-display').classList.remove('hidden');
        document.getElementById('profile-form').reset();
    }
});



$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('#menu').toggleClass("active")
    })
    })
 

    const Dashboard = document.getElementById("Nav_Dashboard")
    const New_Products = document.getElementById("Nav_add_product")
    const Review = document.getElementById("Nav_customers")
    const Profile = document.getElementById("Profile")
    let interface = document.querySelector(".interface")
    let Product_Container = document.querySelector(".product_container")
    let Review_body = document.querySelector(".Review-page")
    let Profile_body = document.querySelector(".profile-body")
   Dashboard.addEventListener("click",()=>{
    interface.style.display = "block"
    Product_Container.style.display = "none"
    Review_body.style.display = "none"
    Profile_body.style.display = "none"
   })
   New_Products.onclick = () => {
    Product_Container.style.display = "block"
    interface.style.display = "none"
    Review_body.style.display = "none"
    Profile_body.style.display = "none"
   };
Review.onclick = () =>{
    Review_body.style.display = "block"
    Product_Container.style.display = "none"
    interface.style.display = "none"
    Profile_body.style.display = "none"
};
Profile.onclick = () => {
    Profile_body.style.display = "block"
    Review_body.style.display = "none"
    Product_Container.style.display = "none"
    interface.style.display = "none"
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
// add product to page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').files[0];
        const productId = document.getElementById('Product-id').value;
        const ProductCategory = document.getElementById('Product-category').value;

        if (productName && productPrice && productImage && productId && ProductCategory) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const product = {
                    productName: productName,
                    productPrice: productPrice,
                    productImage: e.target.result,
                    productId: productId,
                    ProductCategory: ProductCategory
                };

                saveProduct(product);
                localStorage.setItem('latestProduct', JSON.stringify(product)); // Save the latest product to local storage
                window.location.href = ''; // Redirect to the new page
                console.log(product);
                
            };
            reader.readAsDataURL(productImage);
        }
    });

    function saveProduct(product) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
});

// to return home
let Home = document.getElementById("Home")
    //href to home page
Home.addEventListener("click",()=>{
    window.location.href = "index.html"
})
let logOut = document.getElementById("Nav-logout")
logOut.addEventListener ("click", ()=>{
    window.location.href = "login.html"
})
// customer review on Home 
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const reviewText = document.getElementById('review-text').value;
    const reviewImage = document.getElementById('review-image').files[0];
    if (customerName && reviewText) {
        const reviewList = document.getElementById('review-list');
        const reviewItem = document.createElement('li');
        const reviewDetails = document.createElement('div');
        reviewDetails.innerHTML = `<strong>${customerName}</strong>: ${reviewText}`;
        reviewItem.appendChild(reviewDetails);
        if (reviewImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                reviewItem.insertBefore(img, reviewDetails);
            };
            reader.readAsDataURL(reviewImage);
        }
        reviewList.appendChild(reviewItem);
        document.getElementById('review-form').reset();
    };
    const ReviewBtn = document.getElementById('reviewItem')
    localStorage.setItem('review', JSON.stringify(ReviewBtn))
    console.log(ReviewBtn);
});

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

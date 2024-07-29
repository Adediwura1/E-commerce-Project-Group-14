// const savedTotalPrice = localStorage.getItem('total_price');
// console.log(savedTotalPrice);
// const storedData = localStorage.getItem('usersData');
// const storageArray = JSON.parse(storedData);

// if (storageArray && Array.isArray(storageArray) && storageArray.length > 0) {
//     const userObject = storageArray[0];
//     var passkey = userObject.passkey;
//     var username = userObject.username;
//     var email = userObject.email;
// }
    const form = document.getElementById('checkoutForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        var emailAddress = document.getElementById('emailAddress').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const address1 = document.getElementById('address1').value;
        const address2 = document.getElementById('address2').value;
        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;
        const region = document.getElementById('region').value;
        const postalCode = document.getElementById('postalCode').value;

        const formData = {
            fullName,
            emailAddress,
            phoneNumber,
            gender,
            address1,
            address2,
            country,
            city,
            region,
            postalCode
        };

        localStorage.setItem('checkoutData', JSON.stringify(formData));

        payWithPaystack();

     });





// function payWithPaystack() {
// let savedTotalPrice = parseFloat(localStorage.getItem("total_price"));

// if (isNaN(savedTotalPrice)) {
//     console.error("Invalid or missing amount: ", savedTotalPrice);
//     return;
// }

// let amountInKobo = Math.round(savedTotalPrice * 100);

// if (!Number.isInteger(amountInKobo)) {
//     console.error("Invalid amount in kobo: ", amountInKobo);
//     return;
// }

// let deletedProducts = [];

// let handler = PaystackPop.setup({
//     key: 'pk_test_a120f47bb7d5b23a3e1ee8b177fa5e0d805c222c',
//     currency: "NGN",
//     email:  email,
//     amount: amountInKobo,
//     ref: '' + Math.floor((Math.random() * 1000000000) + 1),
//     onClose: function() {
//         Toastify({ 

//             text: "payment cancel!!",
//             style: {
//                 background: "linear-gradient(to right, #ff0000,#5f0101)",
//               },
//             duration: 3000,
//             offset: {
//                 x: 40,
//                 y: 90
//               },
//              position:"right",
//              gravity:"top"
            
//             }).showToast();
//     },
//     callback: function(response) {
//         let message = 'Payment complete! Reference: ' + response.reference;
//         Toastify({

//             text:message,
//             style: {
//                 background: "linear-gradient(to right,#05ef05,#046b04)",
//               },
//             duration: 3000,
//             offset: {
//                 x: 40, 
//                 y: 90
//               },
//              position:"right",
//              gravity:"top"
            
//             }).showToast();
           
//         localStorage.setItem("totalSales", JSON.stringify(amountInKobo/100));

//         let cart = JSON.parse(localStorage.getItem("cart"));
      
//             cart = [];
        
        

//         cart.forEach(product => {
//             console.log(`Product Name: ${product.title}, Price: ${product.price}`);
//         });

//         cart.forEach(product => {
//             deletedProducts.push({id:response.reference, name: product.title,artist:username,status: "Complete", price: '\u20A6'+product.price ,  });
//         });

//         deletedProducts.forEach(deletedProduct => {
//             cart = cart.filter(product => product.title !== deletedProduct.name || product.price !== deletedProduct.price);
//         });

//         localStorage.setItem("cart", JSON.stringify(cart));

//         let existingArray = JSON.parse(localStorage.getItem('storedProduct'));
//         if (existingArray) {
//             deletedProducts.forEach(deletedProduct => {
//                 existingArray = existingArray.filter(item => item.title !== deletedProduct.name || item.price !== deletedProduct.price);
//             });
//             localStorage.setItem('storedProduct', JSON.stringify(existingArray));
//         }

//         displayCart();

//         console.log("Deleted Products:", deletedProducts);
  

//   let savedDeletedProducts =   localStorage.setItem("deletedProduct",JSON.stringify(deletedProducts))
//   console.log(savedDeletedProducts);
//      window.location.href ="/index.html"



//     }
// });

// handler.openIframe();
// }



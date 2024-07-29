
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





     const paystackButton = document.getElementById('paystackButton');

     const totalAmount = JSON.parse(localStorage.getItem('totalAmount')) * 100
     console.log(totalAmount);

     
     function payWithPaystack() {
         let amount = calculateTotalPrice() * 100; // Paystack expects the amount in kobo
     
         let handler = PaystackPop.setup({
             key: 'pk_test_9a99a67d1e4a1ac30a80511697d98f516981ef07',
             email: 'customer@example.com',
             amount: totalAmount,
             currency: 'NGN',
             ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
             callback: function(response) {
                 alert('Payment successful. Transaction reference: ' + response.reference);
             },
             onClose: function() {
                 alert('Transaction was not completed, window closed.');
             }
         });
         handler.openIframe();
     }
     
     function calculateTotalPrice() {
         let totalPrice = 0;
         checkOutList.forEach((item) => {
             totalPrice += parseInt(item.price * item.quantity);
         });
         return totalPrice;
     }
     
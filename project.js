 var menuBar=document.querySelector('#menuBar')
 var sideBar=document.querySelector('.sideBar')
 menuBar.addEventListener('click', ()=>{
     sideBar.classList.toggle('active')
 })

 const popUp = document.querySelector('.popUp')
 const popupClose = document.querySelector('.popupClose')

if(popUp){
    popupClose.addEventListener('click', ()=>{
        popUp.classList.add("hidePopup") 
    });
    window.addEventListener('load', ()=>{
     setTimeout(()=>{
        popUp.classList.remove('hidePopup');
     }, 1000);   
    });
}


function storeMe(){
var popupStorage = document.getElementById('popupStorage').value

var emailStore = localStorage.setItem('popupStorage', popupStorage);
alert('Email Received')
};



function promoStorage(){
var promoEmail = document.getElementById('Text').value;

var promoStore = localStorage.setItem('promoEmail', promoEmail);

alert('Email Saved')

// const formId = document.getElementById('formId');
// var promoButton = document.getElementById('promoButton');

// formId.addEventListener('submit', function(event){
//     event.preventDefault();
// })
}
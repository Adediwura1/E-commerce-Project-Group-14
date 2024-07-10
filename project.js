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

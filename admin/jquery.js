$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('#menu').toggleClass("active")
    })
    })
 

    const Dashboard = document.getElementById("Nav_Dashboard")
    const New_Products = document.getElementById("Nav_add_product")
    let interface = document.querySelector(".interface")
    let Product_Container = document.querySelector(".product_container")
   Dashboard.addEventListener("click",()=>{
    interface.style.display = "block"
    Product_Container.style.display = "none"
   })
   New_Products.onclick = () => {
    Product_Container.style.display = "block"
    interface.style.display = "none"
    let NewArray = JSON.parse(localStorage.getItem('saveditems'));
    var product_id = document.getElementById("product_id").value
    document.getElementById("product_id").value = saveditems.length || 0   
   };

var logo = document.querySelector(".logo")
logo.addEventListener("click",()=>{
    interface.style.display = "block"
     Product_Container.style.display = "none"
  
})
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
var form = document.getElementById("form1")


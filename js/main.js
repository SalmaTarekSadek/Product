let allProducts = document.querySelectorAll(".products li");
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

let btn1 = document.querySelector("#showPrice");
let totalPrice = 0;

allProducts.forEach(function (item) {
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"));
        div1.innerHTML += item.textContent +`<br>`;
        if(div1.innerHTML != ""){
            btn1.style.display = "block";
        }
    }
})

btn1.onclick = function(){
    div2.innerHTML = totalPrice;
}
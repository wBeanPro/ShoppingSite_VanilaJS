var adsdata = JSON.parse(localStorage.getItem("ads"));

document.querySelector("#totalprice").textContent = adsdata[0];

document.querySelector("#disc-price").textContent = "-" + adsdata[1];

document.querySelector("#cartamount").textContent = "₹ " + adsdata[2];

document.querySelector("#final-amt").textContent = "₹ " + adsdata[2];

var Cart = JSON.parse(localStorage.getItem("cartData")) || [];
document.querySelector("#cart-no").textContent = Cart.length;

function render(data) {
  var display = document.querySelector("#display");
  display.innerHTML = "";
  data.map(function (ele, index) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", ele.src);

    var nameBox = document.createElement("div");
    nameBox.setAttribute("class", "namebox");
    var name = document.createElement("span");
    name.setAttribute("class", "name");
    name.innerText = ele.name;
    nameBox.append(name);

    var botBox = document.createElement("div");
    botBox.setAttribute("class", "botbox");
    var priceBox = document.createElement("div");
    var weight = document.createElement("span");
    weight.setAttribute("class", "weight");
    weight.innerText = ele.weight;
    var price = document.createElement("span");
    price.setAttribute("class", "price");
    price.innerText = "₹ " + ele.price;
    var br = document.createElement("br");
    priceBox.append(weight, br, price);
    var btn = document.createElement("div");
    btn.setAttribute("class", "btn");
    btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';

    btn.addEventListener("click", function () {
      add(index);
    });
    botBox.append(priceBox, btn);

    div.append(img, nameBox, botBox);
    display.append(div);
  });
}

function add(index) {
  console.log("here" + index);
  cart.push(dryFruits[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

function renderVeggi() {
  var category = document.getElementById("category");
  category.innerText = "Vegetables ";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Vegetables";

  render(veggie);
}

function renderDry() {
  var category = document.getElementById("category");
  category.innerText = "Dry Fruits";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Dry Fruits";

  render(dryFruits);
}

function renderFruits() {
  var category = document.getElementById("category");
  category.innerText = "Fruits";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Fruits";

  render(fruits);
}

function renderHydroponics() {
  var category = document.getElementById("category");
  category.innerText = "Hydroponics";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Hydroponics";

  render(hydro);
}

function renderHerbs() {
  var category = document.getElementById("category");
  category.innerText = "Herbs";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Herbs";

  render(herbs);
}

function renderDairy() {
  var category = document.getElementById("category");
  category.innerText = "Dairy Products";
  var type = document.getElementById("veggi_type");
  type.innerText = "All Dairy Products";

  render(dairy);
}
render(veggie);

// Aside

var side = document.querySelectorAll(".side");
for (var i = 0; i < side.length; i++) {
  side[i].addEventListener("click", function (event) {
    var content = document.querySelectorAll(".content");
    for (var j = 0; j < content.length; j++) {
      content[j].style.display = "none";
    }
    var ele = event.target.nextElementSibling;

    if (ele.style.display === "block") {
      ele.style.display = "none";
    } else {
      ele.style.display = "block";
    }
  });
}

//---------------------------------------------------Nav---------

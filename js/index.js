var cart = JSON.parse(localStorage.getItem("cartData")) || [];
var df=JSON.parse(localStorage.getItem("dfdata"))||[];
var dryFruits = [
  {
    name: "Cashew - 100gm",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
    price: "99",
    weight: "100 gms",
  },

  {
    name: "Cashew Tukda - 100gm",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/580/original/data?1635086672",
    price: "92",
    weight: "100 gms",
  },

  {
    name: "Walnut - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/583/original/data?1635137039",
    price: "175",
    weight: "100 gms",
  },

  {
    name: "Pista Salted - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/586/original/data?1635141850",
    price: "122",
    weight: "100 gms",
  },

  {
    name: "Pista Kernel - 100gms",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/588/original/data?1635142184",
    price: "186",
    weight: "100 gms",
  },
];

dryFruits.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';

  btn.addEventListener("click", function () {
    add1(index);
  });
  botBox.append(priceBox, btn);

  var display = document.querySelector("#itemsdry");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add1(index) {
  console.log("here" + index);
  cart.push(dryFruits[index]);
   localStorage.setItem("cartData", JSON.stringify(cart));
}
console.log(df);
// data of fruits append
var cart = JSON.parse(localStorage.getItem("cartData")) || [];
fruitData = [
  {
    src: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
    name: "Banana Robusta",
    weight: "1 kg",
    price: "29",
  },
  {
    src: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
    name: "Banana Elaichi/ Yellaki",
    weight: "1 kg",
    price: "39",
  },
  {
    src: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
    name: "Chikoo",
    weight: "1 kg",
    price: "49",
  },
  {
    src: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
    name: "Grapes Green",
    weight: "1 kg",
    price: "70",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/233/original/data?1609860341",
    name: "Grapes Black",
    weight: "1 kg",
    price: "90",
  },
];
fruitData.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';

  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add2(index);
  });

  var display = document.querySelector("#itemsf");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add2(index) {
  console.log("here" + index);
  cart.push(fruitData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}
// data of vegetables append
var veggie = [
  {
    name: "Carrot Orange",
    src: "https://i.postimg.cc/rmYTMXZF/carrot.png",
    price: "30",
    weight: "300 gm",
  },

  {
    name: "Sweet Corn",
    src: "https://i.postimg.cc/pLxL0vgg/sweet-corn.png",
    price: "14",
    weight: "1 pc",
  },

  {
    name: "Cabbage Red",
    src: "https://i.postimg.cc/HkQT5NnB/cabbage-red.png",
    price: "37",
    weight: "1 pc",
  },

  {
    name: "Basil Italian",
    src: "https://i.postimg.cc/PxffdMtK/basil-italian.png",
    price: "11",
    weight: "50 gm",
  },

  {
    name: "Mushroom",
    src: "https://i.postimg.cc/XJXM21NM/mushroom.png",
    price: "37",
    weight: "1 unit",
  },
];
veggie.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add3(index);
  });

  var display = document.querySelector("#itemsv");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add3(index) {
  console.log("here" + index);
  cart.push(veggie[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// data append for hydroponics
hydroData = [
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/169/original/data?1599847670",
    name: "Celery(Hydroponics)",
    weight: "15-200Gm",
    price: "107 ",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/631/original/data?1635766646",
    name: "Mixed lettuice (Hydroponics)",
    weight: "1 punnet (approx 10gm)",
    price: "69",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/103/original/data?1639301565",
    name: "Kale Curly (Aquaponics)",
    weight: "200Gm",
    price: "129",
  },
];
hydroData.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add4(index);
  });

  var display = document.querySelector("#itemsh");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});

function add4(index) {
  console.log("here" + index);
  cart.push(hydroData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the data of dairy

var dairyData = [
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/394/original/data?1625864720",
    name: "ISKCON's A2 Cream Ghee",
    weight: "225ml",
    price: "375",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/367/original/data?1622452513",
    name: "ISKCON's A2 Bilano Ghee",
    weight: "500ml",
    price: "1250",
  },
];

dairyData.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);

  btn.addEventListener("click", function () {
    add5(index);
  });

  var display = document.querySelector("#itemsd");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add5(index) {
  console.log("here" + index);
  cart.push(dairyData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the herb data
herbData = [
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/419/original/data?1635147438",
    name: "Colocasia Leaves",
    weight: "1pcs",
    price: "4",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/602/original/data?1635155510",
    name: "Betel Leafs",
    weight: "12 pcs",
    price: "21",
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/127/original/data?1603884053",
    name: "Masala Combo",
    weight: "12 Pkt",
    price: "13",
  },
];

herbData.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);
  btn.addEventListener("click", function () {
    add6(index);
  });

  var display = document.querySelector("#itemsherb");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add6(index) {
  console.log("here" + index);
  cart.push(herbData[index]);
  localStorage.setItem("cartData", JSON.stringify(cart));
}

// appending the best deal data

bestDeal = [
  {
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/169/original/data?1599847670",
    name: "Celery(Hydroponics)",
    weight: "15-200Gm",
    price: "107 ",
  },
  {
    name: "Sweet Corn",
    src: "https://i.postimg.cc/pLxL0vgg/sweet-corn.png",
    price: "14",
    weight: "1 pc",
  },
  {
    src: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
    name: "Grapes Green",
    weight: "1 kg",
    price: "70",
  },
  {
    name: "Cashew - 100gm",
    src: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/577/original/data?1635085485",
    price: "99",
    weight: "100 gms",
  },
  {
    name: "Mushroom",
    src: "https://i.postimg.cc/XJXM21NM/mushroom.png",
    price: "37",
    weight: "1 unit",
  },
  
 
];
bestDeal.map(function (ele, index) {
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
  price.innerText = "Rs. " + ele.price;
  var br = document.createElement("br");
  priceBox.append(weight, br, price);
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.innerHTML = '<i class="fas fa-cart-plus"></i>&nbsp ADD';
  botBox.append(priceBox, btn);

  btn.addEventListener("click", function () {
    add7(index);
  });
  var display = document.querySelector("#items");
  div.append(img, nameBox, botBox);
  display.append(div);
  //document.querySelectorAll("#items").append(div);
});
function add7(index) {
  console.log("here" + index);
  cart.push(bestDeal[index]);
//HEAD
  localStorage.setItem("cartData",JSON.stringify(cart)); 
}

function gotoproduct(){
  window.location.href = "product.html";
}
//----------------
  localStorage.setItem("cartData", JSON.stringify(cart));

//----------29670c38cf85f90005d20f6f8bc375b8d6357cfa

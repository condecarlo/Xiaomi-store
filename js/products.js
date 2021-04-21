const products = [
        {
            "id": "1",
            "imgsrc" : "./img/Products/Redmi Note 10S.png",
            "bgimgsrc" : "./img/BigProducts/Redmi Note 10S.jpg",
			"name": "Xiaomi Redmi Note 10S",
			"brand": "xiaomi",
            "description": "Redmi Note 10S",
			"price": "Php 20,000"

		},
		{
            "id": "2",
            "imgsrc" : "./img/Products/Redmi Note 10 5G.png",
            "bgimgsrc" : "./img/BigProducts/Redmi Note 10 5G.jpg",
			"name": "Xiaomi Redmi Note 10 5G",
			"brand": "xiaomi",
            "description": "Redmi Note 10 5G",
			"price": "Php 19,000"

		},
        {
            "id": "3",
            "imgsrc" : "./img/Products/Redmi Note 10 Pro.png",
            "bgimgsrc" : "./img/BigProducts/Redmi Note 10 Pro.jpg",
			"name": "Xiaomi Redmi Note 10 Pro",
			"brand": "xiaomi",
            "description": "Redmi Note 10 Pro",
			"price": "Php 18,500"

		},
        {
            "id": "4",
            "imgsrc" : "./img/Products/Redmi Note 10.png",
            "bgimgsrc" : "./img/BigProducts/Redmi Note 10.jpg",
			"name": "Xiaomi Redmi Note 10",
			"brand": "xiaomi",
            "description": "Redmi Note 10",
			"price": "Php 18,000"

		},
        {
            "id": "5",
            "imgsrc" : "./img/Products/Redmi Note 9T.png",
            "bgimgsrc" : "./img/BigProducts/Redmi Note 9T.jpg",
			"name": "Xiaomi Redmi Note 9T",
			"brand": "xiaomi",
            "description": "Redmi Note 9T",
			"price": "Php 16,500"

		},
		{
            "id": "6",
            "imgsrc" : "./img/Products/Redmi 9T.png",
            "bgimgsrc" : "./img/BigProducts/Redmi 9T.jpg",
			"name": "Xiaomi Redmi 9T",
			"brand": "xiaomi",
            "description": "Redmi 9T",
			"price": "Php 16,000"

		},
        {
            "id": "7",
            "imgsrc" : "./img/Products/Redmi 9C.png",
            "bgimgsrc" : "./img/BigProducts/Redmi 9C.jpg",
			"name": "Xiaomi Redmi 9C",
			"brand": "xiaomi",
            "description": "Redmi 9C",
			"price": "Php 15,000"

		},
        {
            "id": "8",
            "imgsrc" : "./img/Products/Redmi 9.png",
            "bgimgsrc" : "./img/Products/Redmi 9.jpg",
			"name": "Xiaomi Redmi 9",
			"brand": "xiaomi",
            "description": "Redmi 9",
			"price": "Php 13,000"

		}
    ];

var cartedLength = 0;
var cartedItems = [];
// {
//     "id": "",
//     "imgsrc" : "",
//     "name": "",
//     "price": ""
// },


function addProducts(){
    // LOOPIONG FOR CAROUSEL
    var sliderList = document.getElementById('sliders');
    let slideItem = products[0];
    sliderList.innerHTML = '<div  class="item active"><div class="container zone item' + slideItem.id +'"><span><h2>' + slideItem.name + '</h2><br>Price: ' + slideItem.price + '<br><input type="button" value="Add to Cart" class="button addToCart"></span></div></div>';
    for (var i=1;i<products.length;i++){
        let slideItem = products[i];
        sliderList.innerHTML = sliderList.innerHTML + 
        '<div  class="item"><div class="container zone item' + slideItem.id 
        +'"><span><h2>' + slideItem.name 
        + '</h2><br>Price: ' + slideItem.price 
        + '<br><input type="button" value="Add to Cart" class="button addToCart"></span></div></div>';
    }


    // LOOPING FOR PRODUCTS
    var productList = document.getElementById('productList');
    for (var i=0;i<products.length;i++) {
        let item = products[i];
        productList.innerHTML = productList.innerHTML 
        + '<div class="box zone"><img src="' + item.imgsrc 
        + '" alt="item' + item.id + '"><span class="itemName">' + item.name 
        + '</span><span><br>' + item.price + '<br><br><input type="button" value="Add to Cart" class="button addToCart"></span></div>';
    }
}

addProducts();

// Add to Cart
var addToCart = document.querySelectorAll(".addToCart");

for (let i=0; i<addToCart.length;i++){
    addToCart[i].onclick=function() {
        if (i>7) {
            var itemIndex = i-8;
        } else {
            var itemIndex = i;
        }
        let item = products[itemIndex];
        let newItem = {
            "id" : item.id,
            "imgsrc" : item.imgsrc,
            "name" : item.name,
            "price" : item.price,
        };
        cartedItems.splice(cartedItems.length,0,newItem);
        cartedLength++;
        alert('Added to Cart!');
    }
}


// Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    var Carted = document.getElementById('Carted');
    modal.style.display = "block";
    Carted.innerHTML = "";
    if (cartedLength === 0) {
        Carted.innerHTML = '<p id="noItem">No items added to cart.</p>';
    } else {
        for (let i=0;cartedItems.length;i++){
            let item = cartedItems[i];
            Carted.innerHTML = Carted.innerHTML
            + '<div class="box zone"><img src="' + item.imgsrc 
            + '" alt="item' + item.id + '"><span class="itemName">' + item.name 
            + '</span><span><br>' + item.price + '<br><br><input type="button" value="Remove from Cart" class="button removeCart"></span></div>';
        }
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// // Modal
// var myBtn = document.getElementById('myBtn');

// myBtn.onclick=function() {
// var Carted = document.getElementById('Carted');
//     alert('clicked');
    // for (let i=0;cartedItems.length;i++){
    //     let item = cartedItems[i];
    //     Carted.innerHTML = Carted.innerHTML + 
    //     + '<div class="box zone"><img src="' + item.imgsrc 
    //     + '" alt="item' + item.id + '"><span class="itemName">' + item.name 
    //     + '</span><span><br>' + item.price + '<br><br><input type="button" value="Add to Cart" class="button addToCart"></span></div>';
    // }
// }




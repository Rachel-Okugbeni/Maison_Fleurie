const productName = document.getElementsByClassName('product-name')[0].innerHTML;
const productPrice = document.getElementsByClassName('price')[0].innerHTML;
let productQuantity = document.getElementById('quantity').defaultValue = 1;
let updatedQuantity = 1;
let basket = localStorage.getItem("savedBasket") ? JSON.parse(localStorage.getItem("savedBasket")) : [];

let item = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
}

//UPDATES ITEM QUANTITY
function updateValue() {
  updatedQuantity = +document.getElementById('quantity').value
}

//CONVERTS PRICE STRING TO INTEGER & ADDS KEY VALUE PAIR TO ITEM OBJECT
function productTotal() {
    const price = Number(item.price.replace(/[^0-9.-]+/g,""));
    let i;
    for (i = 0; i < basket.length; i++) {
        let totalPrice = price * basket[i].quantity;
        basket[i].totalPrice = totalPrice
    }    
}

// ADDS ITEM TO BASKET ARRAY & UPDATE LOCAL STORAGE
function addBasket() {
         if (basket.length === 0) {
            item.quantity = updatedQuantity
            basket.push(item);
         } else {
             let i;
             for (i=0; i < basket.length; i++) {
                 if (basket[i].name === item.name) {
                    basket[i].quantity = basket[i].quantity + updatedQuantity
                 }
             }
         }
    productTotal();
    basketCount()
    localStorage.setItem("savedBasket", JSON.stringify(basket));
}




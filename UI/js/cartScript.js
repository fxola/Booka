
    let removeButtons = document.getElementsByClassName('remove-item');

    for(let i=0; i< removeButtons.length; i++){
        let button = removeButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');

        //iterate over all quantity inputs
        for(let i=0; i< quantityInputs.length; i++){

            let input =quantityInputs[i];

            //update cart total whenever there's a change in quantity ordered
            input.addEventListener('change', quantityChanged);
        }

    let addToCartButtons =document.getElementsByClassName('to-cart');

        for(let i=0; i< addToCartButtons.length; i++){

            let addbutton = addToCartButtons[i];
            addbutton.addEventListener('click', addTocartClicked)
        }

    let checkout = document.getElementsByClassName('buy')[0];
        checkout.addEventListener('click', checkOutPurchases)


function checkOutPurchases(){
  let tBody = document.getElementById('cart-body');
  let rows = tBody.querySelectorAll('tr');

  alert('Your Order is Being Processed. Thank you!');

    //clear cart
    for(let i =0; i< rows.length; i++ ){
      if(rows[i].classList.contains('row-item')){
          rows[i].remove();
      }
    }

    updateCartTotal();
}

function removeCartItem(e){
  e.target.parentElement.parentElement.remove();
  updateCartTotal();
}


function quantityChanged(e){

    let input = e.target;

    //set default quantity to one incase of invalid input
    if(isNaN(input.value)||input.value <= 0){
        input.value = 1;
    }

    updateCartTotal();

}

function addTocartClicked (e){

    let button = e.target;
    let mealItem = button.parentElement.parentElement.parentElement;
    let price = mealItem.getElementsByTagName('p')[0].innerText;
    let title = mealItem.getElementsByTagName('h4')[0].innerText;
    addItemToCart(title,price);
    updateCartTotal();

    /****
     * @Todo 
     * - add functionality to remove cart button after an item has been addded to cart
     * - add functionality to add cart button after an item has been removed from cart
     */
    // button.parentElement.innerText = "Added To Cart";
}


function addItemToCart(title, price){
  
    let cartRow = document.createElement('tr');
        cartRow.classList.add('row-item');
    let totalRow = document.getElementsByClassName('total-row')[0];
   
    cartRowContents = ` <td id="cart-row">${title}</td>
                        <td id="cart-row" class="cart-price">${price}</td>
                        <td id="cart-row"><input class="cart-quantity-input" type="number" value="1"></td>
                        <td id="cart-row" ><button class="cancel remove-item" type="button">X</button></td>`;

    cartRow.innerHTML = cartRowContents;
    totalRow.insertAdjacentElement('beforebegin', cartRow);

    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    updateCartTotal();
}



function updateCartTotal(){

  let tBody = document.getElementById('cart-body');
  let cartRows = tBody.getElementsByClassName('row-item');

  let cartTabAmount = document.getElementById('cart-amount');
  cartTabAmount.innerText = cartRows.length + " item(s)";

  let total = 0;
    for(let i=0; i< cartRows.length; i++){
        let cartRow = cartRows[i];

        let pattern = /\D/g; //to remove the Naira symbol
        let price = cartRow.getElementsByClassName('cart-price')[0].innerHTML.replace(pattern, '');
        let qty = cartRow.getElementsByClassName('cart-quantity-input')[0].value;
        total = total + (price*qty);
      
    }
  document.getElementsByClassName('cart-total-price')[0].innerHTML = '&#8358; '+total;
}
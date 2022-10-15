const productDiv = document.getElementById('product-div');
const cartsTable = document.querySelector('.carts-table');
const showDiv = document.querySelector('.show');

// render product
function renderProduct(){
  products.forEach(product => {
    productDiv.innerHTML += 
        `  <div class="col-12 col-lg-6 mb-4">
                   <div class="card">
                         <div class="card-body">
                        <img src=" ${product.src}" class="w-100" />
                            <hr />
                          <p class="fs-5 fw-bold">${product.name}</p>
                             <p>
                             Price - <span class="text-primary fs-5 fw-bold">${product.price}</span>
                            </p>
                            <div class="btn btn-primary w-100 cart-btn fs-6 fw-bold" onclick="addtoCarts(${product.id})">
                         Add to cart
                     </div>
                    </div>
                   </div>
            </div>`
  });
}

renderProduct();

carts = JSON.parse(localStorage.getItem('cartsProduct')) || [];
// add to cart 
function addtoCarts(id){
  if(carts.some(cart => cart.id === id)){
    changeQty('plus',id);
  }else{
    cart = products.find(product => {
      return product.id === id;
    });
    carts.push({
      ...cart,quantity:1
    })
  }

  updateCart();
}

// render product cart
function renderProductCart(){

  cartsTable.innerHTML = '' ;  
  showDiv.innerHTML = '';
  carts.forEach(cart =>  
  cartsTable.innerHTML += `
  <tr>
      <td scope="col">
        <img src=" ${cart.src}" class="img-fluid" id="img-cart" />
      </td>
      <td scope="col">
        <p class="pt-2 fs-5"> $ ${cart.price}</p>
      </td>
      <td scope="col">
        <i class = "fa-solid fa-circle-minus fs-5 text-primary pt-3" onclick="changeQty('minus',${cart.id})"></i>
        <span class="mx-2 fs-5 pt-3" id="quantity">${cart.quantity}</span> 
        <i class = "fa-solid fa-circle-plus fs-5 text-primary pt-3" onclick="changeQty('plus',${cart.id})"></i>
      </td>
      <td scope="col">
        <i class = "fa-solid fa-trash text-danger fs-5 pt-3" title="Remove" onclick="removeCart(${cart.id})"></i>
      </td>
  </tr>`
  );
  show_hide();
}



// change quantity 
function changeQty(condition,id){
  carts = carts.map(cart => {
    let quantity = cart.quantity;
    if(cart.id === id){
      if(condition === 'plus' && cart.unit > quantity){
         quantity++
      }else if(condition === 'minus' && quantity > 1){
        quantity--
      }
    }
    return {
      ...cart,quantity
    }
  })
  updateCart();
}

// show render number
function renderNumber(){
  let totalPrice = 0;
  let totalCarts = 0;
  carts.forEach(cart => {
    totalCarts += cart.quantity;
    totalPrice += cart.price * cart.quantity
  });
  document.querySelector('#totalPrice').innerText =`$ ${totalPrice}`;
  document.querySelector('#totalCart').innerText = totalCarts;

}

// remove cart
function removeCart(id){
  carts = carts.filter(cart => {
    return cart.id !== id;
  });
  updateCart();
}


function show_hide(){
  if(!cartsTable.innerHTML){
   showDiv.innerHTML = `<h5 class="my-3 text-center text-primary">No item in cart.</h5>` 
  }
}

// update cart
function updateCart(){
  renderProductCart();
  renderNumber();
  localStorage.setItem('cartsProduct',JSON.stringify(carts));
}

updateCart();
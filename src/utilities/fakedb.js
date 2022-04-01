const addTodb = id =>{
    let shoppingCart;

    const savedCart = localStorage.getItem('shopping-cart');
    if(savedCart){
         shoppingCart = JSON.parse(savedCart);
    }
    else{
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if(quantity){
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getShoppingCart = () =>{
    let shoppingCart;

    const savedCart = localStorage.getItem('shopping-cart');
    if(savedCart){
         shoppingCart = JSON.parse(savedCart);
    }
    else{
        shoppingCart = {};
    }
    return shoppingCart;
}

export {addTodb , getShoppingCart};
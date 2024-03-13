// importing the module
import { addToCart, totalPrice as price, tq} from './shoppingCart.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 1},
    ],
    user: {loggedIn: true},
}
// const stateClone = Object.assign({}, state);
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone)

/*
console.log('importing the module');
// // console.log(shippingCost);

// addToCart('bread', 5);
// console.log(price);
// console.log(tq);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//     return {title: data.at(-1).title, text: data.at(-1).body}
// }

// const lastPost = await getLastPost();
// console.log(lastPost);

// Modules before ES6
const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

shoppingCart2.addToCart('maggie', 1);
shoppingCart2.addToCart('Pizza', 4);
console.log(shoppingCart2.cart);
*/
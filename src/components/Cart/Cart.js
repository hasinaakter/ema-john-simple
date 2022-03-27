import React from 'react';
import'./Cart.css'
const Cart = ({cart}) => {

    
    return (
        <div className='cart'>
              <h3>Order List</h3>
             <p>Selected Item: {cart.length}</p>
             <p>Total Price: </p>
             <p>Total Shipping: </p>
             <p>Tax: </p>
             <h5>Grand Total:</h5>
        </div>
    );
};

export default Cart;
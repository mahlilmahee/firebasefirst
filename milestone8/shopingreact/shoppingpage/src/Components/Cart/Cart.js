import React from 'react';
import Product from '../Product/Product';
import './Cart.css';
const Cart = (props) => {
    console.log(props)
    const {cart}=props;
    
    let total =0;
    let totalQuantity=0;

    for(const totalll of cart ){
        if(!totalll.quantity){
            totalll.quantity=1;
        }
        total =total+totalll.price*totalll.quantity;
        totalQuantity=totalQuantity+totalll.quantity;
       
    }
    return (
        <div>
              <h3> order summary</h3>
              <h3> Items Ordered: {totalQuantity}</h3>
              <h2> Total : {total} $</h2>
              {props.children}
        </div>
    );
};

export default Cart;
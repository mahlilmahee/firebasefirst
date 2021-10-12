import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearTheCart, deleteFromDb } from '../../ema-john-simple-resources-master/utilities/fakedb';
import Cart from '../Cart/Cart';
import CallingData from '../Shop/StateFunction';
import KeyInLocal from './../Shop/SavedProduct';
import OrderReview from './OrderReview/OrderReview';


const Order = () => {
    const [Product]=CallingData();
    const [cart,setCart]=KeyInLocal(Product);
    const onClickRemove =(key)=>{
         const newKeys =cart.filter( product=>product.key !== key);
         setCart(newKeys);
         deleteFromDb(key)
    }
    const history =useHistory();

    const handlePlaceOrder=()=>{
         history.push('/orderplace');
         setCart();
        clearTheCart();
    }
    return (
        <div>
             <div className="shopContainer">
            <div className="products"> 
           
            {
                cart.map(product=><OrderReview onClickRemove={onClickRemove} key={product.key} product={product}></OrderReview>)
            }
            </div>
            <div className="cartcontainer">

            <Cart cart={cart}> <button onClick={handlePlaceOrder} className="button">PlaceOrder</button></Cart>
            </div>
         </div>
         </div>
    );
};

export default Order;
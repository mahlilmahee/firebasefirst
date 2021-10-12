import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';



const Product = (props) => {
    // console.log(props); 
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    const {name,img,price,seller,stock}=props.product;
    return (
        <div className="producttotal">
            <div className="productimgs">
                <img className='imageOfProduct' src={img} alt="" />
                </div>
            <div className='productother'>
            <h4 className="productname">{name} </h4>
            <h3><small>sell by :{seller}</small></h3>
            <h4> Price: {price} $</h4>
            <h3> only {stock} left in stock - order soon</h3>
            <Rating></Rating><br></br>
            <button
             className="button" onClick={()=>props.handleToCart(props.product)}  >{element}  Add to cart
             </button>
            </div>
        </div>
    );
};

export default Product;
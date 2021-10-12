import React from 'react';

const OrderReview = (props) => {
    const{name,price,quantity,key}=props.product;
    const {onClickRemove}=props;
  
    return (
        <div>
            <div> 
                <h4> {name}</h4>
                <h3> {price}</h3>
                <h2>{quantity}</h2>
                <button className='button' onClick={ ()=> onClickRemove(key)}> Remove Item</button>
            </div>
        </div>
    );
};

export default OrderReview;<div> 
<h2> </h2></div>
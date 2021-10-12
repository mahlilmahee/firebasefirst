
import Product from './../Product/Product';
import { useState, useEffect } from 'react';
import { getStoredCart } from '../../ema-john-simple-resources-master/utilities/fakedb';

const KeyInLocal=(Product)=>{
const [cart,setCart]=useState([]);
useEffect(()=>{
    if(Product.length){
        const savedCart=getStoredCart();
        const storedCart=[];
        for(const key in savedCart){
            const addedProducts=Product.find(product=>product.key===key);
            if(addedProducts){
                const quantity=savedCart[key];
                addedProducts.quantity=quantity;
                storedCart.push(addedProducts);
            }
        }
        setCart(storedCart);
    }
},[Product]);
return [cart,setCart]
};
export default KeyInLocal;
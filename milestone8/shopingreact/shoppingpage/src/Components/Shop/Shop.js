import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../ema-john-simple-resources-master/utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [product,setProduct]=useState([]);

    const [data, setData]=useState([]);
    useEffect(()=>{
        console.log('product ApI called ');
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(
            data=> {setProduct(data)
                setData(data); }  )
    },[]);
    
    const [cart,setCart]=useState([]);
    
    const handleToCart =(product)=>{
         const exists =cart.find(pd=>pd.key===product.key);
         let newCart=[];
        if(exists){
         const rest =cart.filter(pd=>pd.key!==product.key);
         exists.quantity=exists.quantity+1;
         newCart=[...rest,product]
        }
        else{
            product.quantity=1;
             newCart =[...cart,product]
        }
        ;
        setCart(newCart);
        // add to local storage of the browser
        addToDb(product.key)
    }
    useEffect(()=>{
        if(product.length){
            // console.log('L S Called ')
        const savedCart=getStoredCart();
        const storedCart =[];
        for(const key in savedCart){
            console.log(key,savedCart[key])
          const addedProducts=product.find(product=>product.key===key);
          if(addedProducts){
               storedCart.push(addedProducts);
               const quantity =savedCart[key];
               addedProducts.quantity=quantity;
               
          }
          console.log(key, addedProducts)
         


        }
        setCart(storedCart);
        }
    },[product])
   const eventinput=event=>{
        const searchText=event.target.value;
    //   console.log(searchText);
    const searchResult=product.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()) );
    // console.log(searchResult);
      setData(searchResult);
         
    }
    return (

      <div>
          <div className="inputdiv" onChange ={eventinput}> 
              <input placeholder="search here "/> 
          </div>
            <div className="shopContainer">
            <div className="products"> 
           
            {
                data.map(product=><Product product={product} key={product.key} handleToCart={handleToCart}></Product>)
            }
            </div>
            <div className="cartcontainer"> 
            <Cart cart={cart}><Link to="/orders"><button className='button'>Revier Order</button></Link> </Cart>
            </div>
        </div>
      </div>
    );
};

export default Shop;
import { useState, useEffect } from 'react';

 const CallingData=()=>{

     const [product,SetProduct]=useState([]);
     useEffect(()=>{
         fetch('/products.json')
         .then(res=>res.json())
         .then(product=>SetProduct(product))
     },[]);
     
     
     return [product];
 }
 export default CallingData;
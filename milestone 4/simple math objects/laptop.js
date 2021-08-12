const products = [ { name:"laptop", price:32000 , quantity:7} , { 
    name:"phone", price:23444 ,quantity:3}, {
         name:"shirt", price:1211,quantity:6
    }, {
         name:"car", price:1000000,quantity:2
    }


]
let totalprice =0;
for ( const full of products){
    const mahee= full.price*full.quantity;
    //  totalprice = totalprice+ full.price;
    totalprice =totalprice+mahee;
    
}
console.log(totalprice);

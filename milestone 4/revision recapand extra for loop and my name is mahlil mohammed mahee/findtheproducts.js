var friends =[ 
    { name:"samsung phone", price :12222},
    { name:"oppo phone", price :50100},
    { name:"motorola phone", price :40000},
    { name:"iphone phone", price :50000},
    { name:"google phone", price :50000},
    { name:"realme laptop", price :17000}  ,
    { name:"realme watch", price :17000} , 
    { name:"realme ipod", price :17000}  
]
function giveMeMyResult(products,searchProduct){
     var matched =[ ];
     searchProduct.toLowerCase();
     for ( const product of products){
          const single = product.name;
            searchProduct.toLowerCase();
          if( single.indexOf(searchProduct)!=-1){
                matched.push(product);
          }
     }
     return matched;
}

var searchindex = giveMeMyResult(friends,"s");
console.log(searchindex);
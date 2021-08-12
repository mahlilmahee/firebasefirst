const mobile = [ {name: "samsung ", price :13011000, camera :" 32 megapixel", storage :"128gb"},
 {name: "samsun ", price :130, camera : " 32 megapixel", storage :"128gb"},
 {name: "samhjjksung ", price :1305600, camera : " 32 megapixel", storage :"128gb"},
 {name: "samsunfg ", price :1346000, camera : " 32 megapixel", storage :"128gb"},
 {name: "samsung ", price :3000, camera :" 32 megapixel", storage :"128gb"},
 {name: "samsuggdg ", price :136000, camera :" 32 megapixel", storage :"128gb"},
 {name: "sfgthng ", price :130000, camera : " 32 megapixel", storage :"128gb"},
 {name: "samsgtfdng ", price :136300, camera : " 32 megapixel", storage :"128gb"},
] 
function mahee( mobile){
     let cheapest= mobile[0];
    for( const smart of mobile){
        //  console.log( smart);
        // price only
         if( smart.price<cheapest.price){
             cheapest=smart;
           
         }
    }
    return cheapest ;
    
}
const range = mobile;
const list = mahee(range);
console.log(list);

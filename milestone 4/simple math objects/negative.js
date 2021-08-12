var array = [3,2,1,5,6,-4,8];
 function negative(array){
     var output =[];
   for ( const numbr of array){
       if( numbr<0){
        break;
       }
       return numbr;
    }
     
   
}
var input = array;
var ashoto= negative(input);
console.log(ashoto);

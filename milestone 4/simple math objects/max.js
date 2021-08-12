
// var max = Math.max(4,4,23,323,321111,99444,3232,2);
// console.log( max);
var max = Math.min(4,4,23,323,321111,99444,3232,2);
console.log( "largest no is not yours bro jao alu diye bhat khao ar ghumao", max);
function findlargest( number1,number2,number3){
    if ( number1>number2 && number1>number3){
        return number1;
    }
   if( number2>number1 && number2>number3){
       return number2
   }
   return number3;
}
var naoto=findlargest(1100000,2000000002,2222);
console.log( naoto);
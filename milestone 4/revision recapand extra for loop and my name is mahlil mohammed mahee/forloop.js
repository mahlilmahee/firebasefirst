// let sum =0;
// for( let i =0; i<100; i++ ){
//      sum = sum+i;

// }
// console.log(sum);
// let reverse = 0;
// for ( let i =6; i>0;i--){
//      console.log(i);
// }
let s=0;
function recursion(i){
     if(i==10){
           return 10;
     }
      return recursion(i+1)+i;
}
var sum = recursion(0);
console.log( sum);
function  factorial( cumma){
     if( cumma==1){
           return 1;
     }
     return factorial(cumma-1)*cumma;
}
var neto = factorial(3);
console.log(neto);
function  fibonacci(n){
     if( n==0){
          return 0;
     }
     if( n==1){
           return 1;
     }
      return fibonacci(n-1)+fibonacci(n-2);
}
console.log( fibonacci(6));
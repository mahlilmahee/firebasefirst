function fibonacciseries(n){
     if( n ==0){
         return [0];
     }
     if( n ==1){
         return [ 0, 1]
     }
     const fibo = fibonacciseries(n-1);
     fibo[n]=fibo[n-1]+fibo[n-2];
     return fibo;
}
var forin = 8;
var dkeh=fibonacciseries(forin);
console.log( dkeh);
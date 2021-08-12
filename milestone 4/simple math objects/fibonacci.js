
// const fibo=[0,1];
// for ( i=2; i<=2000 ; i++){
//      fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);


function fibonacci( limit){
     var array=[ 0,1];
     if( limit<0){
          console.log("babago sundar man de minus dis nah amare")
     }
     if ( limit!=Number){
            console.log( " please enter a valid number")
     }
     for ( i=2; i<limit;i++){
          array[i]=array[i-1]+array[i-2];
     }
     return array;
}
var ghum ="gd";
var naoto=fibonacci( ghum);
console.log( naoto);
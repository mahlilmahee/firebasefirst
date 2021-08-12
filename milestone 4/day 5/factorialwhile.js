
// function facto(target){
//     var i=1;
//     var factorial=1;
//     while(i<=target){
//         factorial=factorial*i;
//         i++;
//     }
//     return factorial;
// }
// var no=10;
// var mygf= facto(no);
// console.log(mygf);

function aberashibo( dream){
     var i =dream;
     var factorial=1;
     while( i>=1){
          factorial=factorial*i;
          i--;
     }
     return factorial;

}
var mobile=6;
var asho=aberashibo(mobile);
console.log( asho);
// // centemeter to Meter 

// function cento(value){
//      var meter= value/100;
//      return meter;

// }
// var nao = 103200;
// var centitometer = cento(nao);
// console.log( centitometer);

function Bookspageswithquantity(x,y,z){
     const firstbookpages =100;
     const secondbookpages =429;
     const thirdbookpages =333;
     let totalfirst =firstbookpages*x;
     let toralsecond =secondbookpages*y;
     let totalthird =thirdbookpages*z;
     let maxmoney =totalfirst+toralsecond+totalthird;
     return maxmoney;

}
var first=12;
var second=222;
var third =1100;
var recipe =Bookspageswithquantity(first,second,third);
console.log(recipe);
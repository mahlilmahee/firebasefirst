 function seerToMon(inputSeer){
    //  error massage 
     if ( inputSeer<0){
          return "please insert a positive number";
     } 
     const typeofinput = typeof(inputSeer);
     if( typeofinput!="number"){
         return "string is not allowded please insert a number value";
     }
    //  error message finished 
    var mon = inputSeer/40;
    return mon ;

 }
 var input =100;
 var outputinMon=seerToMon(input);
 console.log(outputinMon );

//  second task 
function totalSales(shirtPiece,pantPiece,shoePiece){

    // error message code 

    if(shirtPiece<0||shirtPiece%1!=0){
        return "please input a valid or positive number";
    }
    if(pantPiece<0||pantPiece%1!=0){
        return "please input a valid or positive number";
    }
    if(shoePiece<0 ||shoePiece%1!=0){
        return "please input a valid or positive number";
    }
    const typeofshirt =typeof(shirtPiece);
    const typeOfPant =typeof(pantPiece);
    const typeOfShoe =typeof(shoePiece);
     if( typeofshirt!="number"){
         return "you cannot put a string here";
     }
     if( typeOfPant!="number"){
         return "you cannot put a string here";
     }
     if( typeOfShoe!="number"){
         return "you cannot put a string here";
     }
      
    //  error messege code finished 

    const perShirtPrice=100;
    const perPantPrice=200;
    const perShoePrice =500;
    const totalShirtPrice =perShirtPrice*shirtPiece;
    const totalPantPrice =perPantPrice*pantPiece;
    const totalShoePrice =perShoePrice*shoePiece;
    const total =totalShirtPrice+totalPantPrice+totalShoePrice;
    return total ;


}
const shirtTaken =100;
const panttTaken =300;
const shoeTaken =40;
const totalShopingExpenses =totalSales(shirtTaken,panttTaken,shoeTaken);
console.log(totalShopingExpenses);

// task numner three 
function deliveryCost(orderNumber){
    const firstHundreadCost=100;
    const secondCostRate =80;
    const restSellingRate=50;
    const checkingType = typeof(orderNumber);
    
    // error message code start 
    if( orderNumber<0||orderNumber%1!=0){
        return "please give a positive number or valid number ";
    }
    else if(checkingType!="number"){
        return "please input a valid number ";
    }
    else if( orderNumber==0){
        return " you have to order something to see the cost ";
    }
    // error messege code finished 
    
    else if( orderNumber<=100){
        const firstHundreadShippingCost= firstHundreadCost*orderNumber;
        return firstHundreadShippingCost;
    }
    else if ( orderNumber<=200){
      const firstHundreadSecondTime=100*firstHundreadCost;
      const rest =orderNumber-100;
      const extraCostForSecondRate=rest*secondCostRate;
      const totalSecondCost=firstHundreadSecondTime+extraCostForSecondRate;
      return totalSecondCost;
         
    }
    else if ( orderNumber>200){
         const firstHundreadSecondTime=100*firstHundreadCost;
         const extraSecondProduct =100* secondCostRate;
         const theRestNumber=orderNumber-200;
         const restCost=theRestNumber*restSellingRate;
         const totalOfAll=restCost+firstHundreadSecondTime+extraSecondProduct;
         return totalOfAll;
    }

}
var products=122;
var theTotalShippingCost=deliveryCost(products);
console.log(theTotalShippingCost);


// task number 4 finished and added extra alert for the user

const friends =[ "mahlil","akib","mohammed","mahee","manik","jahed","tamim"]
function perfectFriend(friends){
 
for( let i =0;i<friends.length;i++) {
    
    //   that's an error messege code 

    if( friends[i]<0||friends[i]>0){
        return " please input a valid name not number";
    }
       
     if(friends[i].length==5){

      return friends[i];
    }
   
}
     return "there is no result matching  your conditions";   

}
var totalFreinds=friends;
var bestFriend=perfectFriend(totalFreinds);
console.log(bestFriend);


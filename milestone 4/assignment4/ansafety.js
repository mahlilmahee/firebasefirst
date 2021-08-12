function seerToMon(inputSeer){
      
    var mon = inputSeer/37.3242;
    return mon;

 }
 var input = 544600;
 var outputinMon=seerToMon(input);
 console.log(outputinMon);

//  second task 
function totalSales(shirtpiece,pantpiece,shoepiece){
    const perShirtPrice=100;
    const perPantPrice=200;
    const perShoePrice =500;
    const totalShirtPrice =perShirtPrice*shirtpiece;
    const totalPantPrice =perPantPrice*pantpiece;
    const totalShoePrice =perShoePrice*shoepiece;
    const total =totalShirtPrice+totalPantPrice+totalShoePrice;
    return total ;

}
const shirtTaken =12;
const panttTaken =30;
const shoeTaken =32;
const totalShopingExpenses =totalSales(shirtTaken,panttTaken,shoeTaken);
console.log(totalShopingExpenses);

// task numner three 
function deliveryCost(orderNumber){
    const firstHundreadCost=100;
    const secondCostRate =80;
    const restSellingRate=50;
    if( orderNumber<=100){
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
var products=170;
var theTotalShippingCost=deliveryCost(products);
console.log(theTotalShippingCost);


// task number 4 

const friends =[ "mahlil","akib","mohammed","mahee","manik","jahed","tamim"]
function perfectFriend(friends){

for( let i =0;i<friends.length;i++) {
     if(friends[i].length==5){

      return friends[i];

    }
}
}
var totalFreinds=friends;
var bestFriend=perfectFriend(friends);
console.log(bestFriend);

// just finished the basic 50 marks assignment now I will do the extra section in the morning
// how to identify a leap year  using javascript and my brain 
function year(lipi){
    if(( lipi%4==0 && lipi%100!=0)||(lipi%400==0)){
         return true;

    }
    return false;
}
const lpyear=2000;
const isthisaLeap=year(lpyear);
console.log("yes this is a leap year congrats my brother your are so lucky", isthisaLeap);
 const mygfbirthdayYear=1700;
const myfuture =year(mygfbirthdayYear);
console.log("is this a leap year ", myfuture);
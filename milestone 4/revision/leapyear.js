// leapyear ke liye banaya hoa ya function ko jara dekho to shalo kamino
function leapbaba( year){
     if ((year%4==0&& year!=0)||( year%400==0)){
          return true;
     }
     return false;

}
var userdate=2000;
var result=leapbaba(userdate);
console.log("is it a leap year :",result);
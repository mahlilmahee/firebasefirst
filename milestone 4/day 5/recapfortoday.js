//  inch to feet 
function feeto( value){
     var feet = value/12;
     return feet;
}
var man=320;
var ft=feeto(man);
console.log("here is my feet value ", ft);

// millee to kilometter 
function kilobaba( distance){
     var result=distance*1.604;
     return result; 
}
var mile= 1200;
var amerSchoolLife= kilobaba(mile);
console.log( "mile ke kilometer e niye gelam ami dekho to milaya hoise naki", amerSchoolLife);

// whether it is a leap year or not 
function leapyear(year){
    if( (year%4==0 && year%100!=0)||(year%400==0)){
         return true;
    }
    return false;

}
var yearro =2100;
var amerJanerBirthday=leapyear(yearro);
console.log("amer janerr birthday ektaa leap year naki boloto computer mohashoi", amerJanerBirthday);

// odd number in thhe javascript lets try to do thiss 
function  odd ( number){
     if( number%2!=0){
          return true;
     }
     return false;
}
var amerexamerno=323;
var ammu=odd(amerexamerno);
console.log("yes congrats it is a odd number lets a play a game now baby come on", ammu);

// now we are gonna explore the system of factorial 
function factobaba(number){
    var fact=1;
    for( i=1; i<=number;i++)
       {  
          
         fact = fact *i;}
       return fact ;

}
var man = 4;
var dekhaoto =factobaba(man);
console.log( dekhaoto);


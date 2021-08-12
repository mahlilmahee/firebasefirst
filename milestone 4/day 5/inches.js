function inchToFeet(inch){

    var feet = inch/12;
    return feet;
}
var myinches =132;
var value = inchToFeet(myinches);
console.log( " my inches in feet", value);

console.log( "ami aber dekhtesi dekhba naki?");
 
var dadiinches =232;
var dadivalue = inchToFeet( dadiinches);
console.log( "amer dadi bolse je eta r man hobe ", dadivalue ,"feet");

// mile to km 
function mileToKilo(mile){
    var kilo =mile*1.60934;
    return kilo;
}
var amount=85;
var speed = mileToKilo(amount);
console.log( " here is your value sir please come back again",speed ,"kilo");
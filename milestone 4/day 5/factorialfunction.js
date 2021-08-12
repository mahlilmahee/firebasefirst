// function for the factorial and this is gonna be fun let's enjoy it comeon.my babies and lets find our gf
function factorial(number){
    let fact =1;
    for( let i=1; i<=number; i++){
        fact= fact*i;  
    }
    return fact;
}
var userinput =6;
var result =factorial(userinput);
console.log(result);
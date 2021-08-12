function factorial( value){
    var facto=1;
    for( i=1; i<=value;i++){
         facto =facto*i;
        
    }
    return facto;
}
var userdate=6;
var amermon=factorial(userdate);
console.log( "dekho to hoise kina ", amermon);
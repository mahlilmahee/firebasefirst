function farenhite( value){
    var result = ( 9/5*value)+32;
    return result;
}
var celcius = 100;
var formulaapply=farenhite(celcius);
console.log(formulaapply);


// now the opposite formula for everyone 
function celo(farvalue){
    var reso = (farvalue-32)*5/9;
    return reso;

}
var abernao= 212;
var hello =celo(abernao);
console.log(hello);
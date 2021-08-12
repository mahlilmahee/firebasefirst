const text = " Good morning, Bangladesh and dear my people of the chittagong";
function reverse(words) {
    let reverse="";
     for( const char of words){
          console.log( char);
         reverse= char+ reverse;
     }
     return reverse;
}
let input = text;
const output=reverse(input);
console.log(output);

const mahee = ['mahee',"karim","mahee","abul","khabul","karim","momtahina","mahee","khamu","mahee" ," cumma"];
function removeduplicate(mahee){
    const nibo = [];
 for( const element of mahee){
      console.log( element);
      if( nibo.indexOf(element)==-1){
           nibo.push(element);
      }

 }
 return nibo;
}
var neto = mahee;
const dekhassi = removeduplicate(neto);
console.log( dekhassi);
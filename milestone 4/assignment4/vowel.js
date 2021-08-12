function vowel(string){
     for(var i=0 ; i <string.length; i++){
      vowels="";
     if( string[i]=="i" || string[i]=="a" || string[i]=="e" ||string[i]=="o" || string[i]=="u") {
          vowels =string[i];
          console.log(vowels);
         
return vowels;
     } 
     
     if( string[i]!="i" || string[i]!="a"|| string[i]!="e"|| string[i]!="o"|| string[i]!="u"){
          console.log( string[i]);
     }
    }
}
var str = "javascriptloops";
var neto = vowel(str);
console.log( neto);
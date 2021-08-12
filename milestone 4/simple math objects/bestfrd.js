 var friends = [ "mahlil","asad mahin ","amer bapre higao to amer a"];
 function findthebigname(friends){
     var array =friends[0];
     for(i=0; i<friends.length; i++) {
         
       if(friends[i].length>array.length){
            array=friends[i];
            
       }
     }
  return array;   
 }

 var naaodekhoto =findthebigname(friends);
 console.log( naaodekhoto);
function  junglerun( miles){
     const firsttenmiles=10;
     const secondtenmiles=20;
     if( miles<10){
          const count = miles*firsttenmiles;
          return count;
     }
     else if ( miles<20){
      const firstsecondten=10*firsttenmiles;
      const rest = miles-10;
      const restmileanimal= rest*secondtenmiles;
      const count2=firstsecondten+restmileanimal;
      return count2;
     }
     else if ( miles<30){
       const firstsecondten= 10*firsttenmiles;
       const seond = 20*20;
       const ressst= miles-20;
       const milesthird = ressst*50;
       const totalll= firstsecondten+seond+milesthird;
       return totalll;

     }
}
const animalmiles= 23;
const dkehobhalokore = junglerun(animalmiles);
console.log(dkehobhalokore);
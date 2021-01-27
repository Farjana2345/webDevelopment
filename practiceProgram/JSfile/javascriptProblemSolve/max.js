var bussiness = 850;
var minister = 450;
var shocib = 650;

 var max = Math.max(bussiness, minister, shocib);
 console.log(max);
// console.log(Math.max(bussiness, minister, shocib)); ae vabe ek line e o kora jay


if(bussiness>minister){
   if(bussiness>shocib){
    console.log("bussiness is bigger");
   }
   else{
    console.log("shocib is bigger");
   }
}
else{
    if(minister>shocib){
        console.log("minister is bigger");
    }
    else{
        console.log("shocib is bigger");
    }
}



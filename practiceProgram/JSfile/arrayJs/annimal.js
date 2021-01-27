/** var depth = 35;
var annimal = 0;
if(depth<=10){
    annimal = depth*50;
}
else if(depth<=20){
    var fristPart = 10 *100;
    var remaining = depth - 10;
    var seceondPart = remaining * 100;
    annimal = fristPart + seceondPart;
}
else{
    var fristPart = 10 * 50;
    var seceondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    annimal = fristPart + seceondPart + thirdPart;
}
*/
function hotelCost (stays){
    var day = 0;
    if (stays<=10){
        day = stays * 100;
        return day ;
    }
   

    else if(stays<=20){
        var fristPart = 10 * 100;
        var remaining = stays - 10;
        var seceondPart = remaining * 80;
        day = fristPart + seceondPart;
        return day;
    }
    
    else{
        var fristPart = 10 * 100;
        var seceondPart = 10*80;
        var remaining = stays - 20;
        var thirdPart = remaining * 50;
        day  = fristPart + seceondPart + thirdPart;
        return day ;
    }
    
    
}

var days = hotelCost(21);
console.log(days);

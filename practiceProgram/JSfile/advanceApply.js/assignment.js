function  kilometerToMeter(kilo){
    var meter  = kilo * 1000;
    return meter;
}
var myMeter = kilometerToMeter(2);
console.log(myMeter);

/** budget area start */

function budgetCalculator(watch,phone,laptop){
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
     total = watch + phone + laptop;
  return total
}
var totalCost = budgetCalculator(3,3,4);
console.log(totalCost);

/** hotelcost area */

function hotelCost (stay){
    var day = 0;
    if (stay<=10){
        day = stay * 100;
    }
   

    else if(stay<=20){
        var fristPart = 10 * 100;
        var remaining = stay - 10;
        var seceondPart = remaining * 80;
        day = fristPart + seceondPart;
    }
    
    else{
        var fristPart = 10 * 100;
        var seceondPart = 10*80;
        var remaining = stay - 20;
        var thirdPart = remaining * 50;
        day  = fristPart + seceondPart + thirdPart;
    }
    return day ;
    
    
}

var totalDays = hotelCost(15);
console.log(totalDays);

/** megafriend start */
function megaFriend(arr){
    var large = [];
     for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
            if( large.length < element.length){
            large = element
        }
     }
    return large;
}

var  largestFriend = megaFriend(["lima","farjana akhter shimu","azharul islam","amena begum rito"]);
console.log(largestFriend); 









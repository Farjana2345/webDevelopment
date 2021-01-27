var inch = 250;
var feet = inch / 12;
var totalFeet = Math.ceil(feet);
console.log("Your height is =",totalFeet);

// function use
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var result = inchToFeet(56);
console.log(result);


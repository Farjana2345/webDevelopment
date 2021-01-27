// const year = 3996;
// let remainder = year % 4;
// if(remainder == 0){
//     console.log('this year is leap year');
// }
// else{
//     console.log('this year is not leap year');
// }
// leap year na ki vabe ber kre
const year = 3958;
let remainder = year % 4;
if(remainder == 0){
    console.log('this year is leap year');
}
else{
    console.log('this year is not leap year');
}

// function diye ki vabe kore
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear = isLeapYear(2020);
console.log(checkYear);
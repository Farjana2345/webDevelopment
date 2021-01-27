var bananaPrice = 12;
console.log(bananaPrice);
var azhar = 15;
console.log(azhar);
var azhar=13;
console.log(typeof azhar);

var Name = "Farjana Akter";
console.log(Name);

var Name = "Farjana Akter";
console.log(typeof Name);
var isHot = true;
console.log(isHot);
var isHot = true;
console.log(typeof isHot);
var mangoPrice = 20;
var applePrice = 30;
console.log(applePrice);
console.log(mangoPrice);
var fruitName = "mango";
var anotherName = "apple";
console.log(fruitName);
console.log(anotherName);
var myname = "shimu";
// myname = "shimus";
console.log(myname);

var promise = "I promise you i love you";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('love'));
console.log(promise.indexOf('i'));
console.log(promise.split(' '));
// integer float and jog biyog system
var number1 = 30;
var number2 = 70;
console.log(number1 + number2);

var number3 = 50;
var number4 = '50.5';
number4 = parseFloat(number4);
console.log(number3 + number4);

var nmbr1 = '11';
var nmbr2 = 11.5;
nmbr1 = parseFloat(nmbr1);
console.log(nmbr1 + nmbr2);

var nmbr = 11;
var nmbr5 = 11.5;
nmbr5 = parseInt(nmbr5);
console.log(nmbr + nmbr5);

var nmbr3 = 12;
var nmbr6 = '11.5';
nmbr6 = +nmbr6;// +symbol diye o string theke number e kora jay
console.log(nmbr3 + nmbr6);
// number theke convert kore string kora niyom
var number = 20;
var number2 = 25;
number = ''+number;
console.log(typeof number);

var number = 0.2;
var number2 = 0.1;
var total = (number + number2);
total = total.toFixed(6)
console.log(total);

// mathmatical start
var aloPrice = 20;
var tomatoPrice = 30;
total = aloPrice + tomatoPrice;
console.log(total);

var aloPrice = 20;
var tomatoPrice = 30;
total = tomatoPrice - aloPrice;
console.log(total);

var aloPrice = 20;
var tomatoPrice = 30;
total = tomatoPrice * aloPrice;
console.log(total);

var aloPrice = 20;
var tomatoPrice = 30;
total = tomatoPrice / aloPrice;

// total = parseInt(total); ae ta dele amr result e kono doshomik ashbe na.

console.log(total);

var aloPrice = 20;
var tomatoPrice = 30;
total = tomatoPrice % aloPrice;
console.log(total);

var aloPrice = 20;
var tomatoPrice = 30;
// tomatoPrice = tomatoPrice + 1; ae ta deo jay abr short e niche deoa hoise
tomatoPrice ++;
console.log(tomatoPrice);

var aloPrice = 20;
var tomatoPrice = 30;
tomatoPrice --;
console.log(tomatoPrice);

var price = 25;
var Name = 'alo';
var result = Name + price;
console.log(result);

var firstName = 'farjana';
var Name = 'akter';
var result = firstName + ' ' + Name;
console.log(result);

// absulate start
 var number = -25;
//  jodi minus thake tahole absulete korle minus jog hye jay
var absulateNumber = Math.abs(number);
console.log(absulateNumber);

var number = 25.4545;
var result = Math.round(number);
console.log(result);

var number = 25.4545;
var result = Math.ceil(number);
console.log(result);

var number = 25.9999;
var result = Math.floor(number);
console.log(result);

var number = 25.4545;
var result = Math.random(number);
console.log(result);
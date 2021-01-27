var a = 5;
var b = 7;
console.log("before swap: a=", a,",", "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a=", a,",", "b=", b);



var x = 8;
var y = 10;
console.log("before swap: x=", x,",", "y=", y);
temp = y;
y = x;
x = temp;
console.log("after swap: x=", x,",", "y=", y);



// 2nd process
x = 10;
y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x=", x,",", "y=", y);

// 3rd process

p = 15;
q = 12;

[p, q] = [q, p];
console.log("after swap: p=", p,",", "q=", q);
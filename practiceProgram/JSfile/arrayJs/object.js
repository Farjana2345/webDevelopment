var student = { id:123, phone:18549, Name:"shimu"};
var student2 = { id:124, phone:1854977, Name:"farjana"};

var phoneNo = student2.phone;
var Name = student2.Name;
// var Name = student["Name"]; ae niyome o kra jay 3rd breaket diye
console.log(phoneNo,Name);
// update phone
student2.phone = 85679;
student2.Name = "riya";
student2.home = "cumilla";
// student2.home2 = "cumilla";

// student2["phone"] = 666888; ae ta diye o no change kora jay
console.log(student2);

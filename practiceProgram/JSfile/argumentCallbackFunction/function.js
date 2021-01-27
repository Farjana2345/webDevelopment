 function evenOdd(num){
    if(num % 2 == 0){
        console.log(num,': is even number');
    }
    else{
       console.log(num*3,': is odd number');
    }
 }



 function evenOdd_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
       evenOdd(num);   
    }
 }
 nums = [12, 13, 5,15,20];
    evenOdd_all(nums);
 age = [10,30,40,50,60,70];
    evenOdd_all(age);
 
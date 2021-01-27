function explain_callback(name,age,task){
    task();
    console.log('hello',name);
    console.log('your age',age);
    // task(); ae khane o deoa jay ekhane dele last e task er output ashbe
}
function wash_hand(){
    console.log('wash your hand');
}
function take_shower(){
    console.log('take shower');
}
function scrol_facebook(){
    console.log('scroll facebook');
}
explain_callback('shima uddin',20,wash_hand);
explain_callback('shimu uddin',30,take_shower);
explain_callback('nugir',22,scrol_facebook);
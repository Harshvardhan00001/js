// sytnax
// function function_name(parameter1.parameter2){
//    // code to be executed}


// function calling 
// function_name(argument1,argument2)



function add(num1,num2){
    return num1+num2;
}
console.log(add(10,20));


// IIFE -> Immediately Invoked Function Expression

let IIFE= (function(a,b){
    console.log(a+b);
})(2,3);
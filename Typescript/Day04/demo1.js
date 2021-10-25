// user defined Functions 
// Basic 4 types of function
// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type
// 1 function without parameter & without return type
function add1() {
    console.log("Function has 1 st type...");
}
// add1();
// 2 function with parameter & without return type
function add2(a, b) {
    console.log("Addition is :: " + (a + b));
}
// add2(5,6);
// 3 function without parameter & with return type
function add3() {
    return (2 + 3);
}
var res = add3();
//  console.log("result is :: "+res);
// 4 function with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("Addition is " + add4(5, 4));

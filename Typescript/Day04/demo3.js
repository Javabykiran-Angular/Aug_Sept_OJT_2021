//Optinal Paramter Function
function add1(a, b) {
    console.log("Value of a is " + a); //7
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not A number
}
// add1(7);
function add2(a, b) {
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not A number
}
// add2();
//Default parameter Function
function add3(a, b) {
    if (b === void 0) { b = 6; }
    console.log("Value of a is " + a); //4
    console.log("Value of b is " + b); //6
    console.log("Addition of a+b is " + (a + b)); //10
}
// add3(4);
function add4(a, b) {
    if (a === void 0) { a = 5; }
    console.log("Value of a is " + a); //4
    console.log("Value of b is " + b); //6
    console.log("Addition of a+b is " + (a + b)); //10
}
// add4(8,4)
function add5(a, b) {
    if (a === void 0) { a = 5; }
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
// add5();
function add6(a, b) {
    if (b === void 0) { b = 5; }
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //5
    console.log("Addition of a+b is " + (a + b)); //NAN
}
add6();

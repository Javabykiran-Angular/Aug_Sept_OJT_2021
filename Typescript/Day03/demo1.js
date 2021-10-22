var str;
// console.log('Value of Str is :: '+str);
str = 'Sumit';
// console.log("Value of Str is "+str);
var b;
b = 2.5;
// console.log(`Value of b is ${b}`);
b = true;
// console.log(`Value of b is ${b}`);
b = "Raokhande";
// console.log(`Value of b is ${b}`);
var b1 = 5;
var b2;
//Type assertion
var str1;
// u can type assetion in 2 ways
//1 Angle bracket
//2 as Syntax
//1 Angle bracket
var temp = str1;
// temp.
//2 as Syntax
var temp1 = str1;
// temp1.
// Operators
// Airthmathic=> +,-,/,*,%
//Bitwise => &, | ,!,>>,<<,^
//Logical => &&,||,!=,<=,>=,==(It checks only value), === (Strongly equal it checks datatype as well a value)
// a1===a2
//Assignment => =,+=,-=
//relational => <,> !=
//ternary => condition?expression1:expression2
// inc/dec => post/pre ++a,a++,--a,a--
//ternary 
var temp3 = 21;
var msg = temp3 < 4 ? 'Hi' : "bye";
// console.log("Message value is :: "+msg);
//Control Statement
// if-else,if,if-else if-else,switch,continue,break
//loop stat.
// while,do-while,for,foreach
// if(21<4){
//     // console.log("Condition is true");
// }else{
//     // console.log("Condition is false");
// }
var choice = 21;
// switch(choice){
//     case 1:console.log("U r in Case 1 ");
//             break;
//     case 2:console.log("U r in Case 2 ");
//          break;
//     default:console.log("U r in default case...");
//             break;
// }
//while
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do{
//     console.log("Count is== "+count);
//     count--;
// }while(count!=0)
// for(int i=0;i<4;i++){//logic}
for (var i = 0; i < 4; i++) {
    // console.log("value of i is "+i);
}
//console.log("After For Loop i value is  "+i);
//var has global scope
//let => it also Presnt in Advanced java script
// let has scope=> within nearest block
for (var j = 0; j < 4; j++) {
    console.log("value of j is " + j);
}

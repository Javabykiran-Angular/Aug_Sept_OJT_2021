// Slice method
// It copied a section of data from exsiting array & return a new array
var a = [44, 2, 32, 11, 78, 9, 3, 8, 10];
var temp = a.slice(1, 6);
// console.log("Original array:: "+a);
// console.log("Copied Array :: "+temp);
//Map Function
var a2 = [2, 3, 4, 5, 6];
var res = a2.map(function (value) {
    return (value * value);
});
console.log("Original array " + a2);
console.log("Square array " + res);

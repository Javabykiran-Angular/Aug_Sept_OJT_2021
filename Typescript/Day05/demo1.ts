//core java array
// int a[5]

// In typescript Array is growable & shrinkable i.e. do not mentioned any array size
// typescript array is homogenous as well as heterogenous(tuple)
 var a:number[]=[2,3,4,6,5];
 var a1=['Sumit','Kiran','Spruha'];
 var a2:number[]=[];
 var a3:any[]=[2.5,'Sumit',true,9,'kiran'];
 var a4=[2.5,'Sumit',true,9,'kiran'];

//  for (let i = 0; i < a.length; i++) {
//      console.log(`a[${i}]=${a[i]}`)     
//  }

// console.log("Array value is "+a);
// console.log("Print Array using join method "+a.join(" # "));
// console.log("Print Array using join method "+a.join());

// foreach

// a.forEach((myvalue,i,b)=>{
//     console.log("value is "+myvalue+" index "+i+" "+b)

// })

//Rest Parameter Function
 //... spread operator
function Display(...item:number[]){
    console.log(item.join(" "));
}

// Display(11,14);
// Display(11,12,22,33,44,55,85);

var a6:number[]=[];
// 1 using push & pop method
// 2 Using splice method

// 1 using push & pop method
// It works on LIFO(Last in First Out) principle
a6.push(44);
// console.log(a6);
a6.push(12,55);
// console.log(a6);
var res=a6.pop();
// console.log("Poped value is "+res);
// console.log(a6);

// 2 Using splice method

var a7:number[]=[5,11,15,85,66,41,30];
console.log(a7);

a7.splice(2,0,50);
console.log(a7);
a7.splice(3,0,77,88,90);
console.log(a7);
a7.splice(5,1);
console.log(a7);
a7.splice(2,2);
console.log(a7);
a7.splice(2,1,20);
console.log(a7);



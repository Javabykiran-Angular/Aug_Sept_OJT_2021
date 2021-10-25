
//Optinal Paramter Function

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//7
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b)); //NAN => Not A number
}

// add1(7);


function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//undefined
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b)); //NAN => Not A number
}

// add2();

//Default parameter Function

function add3(a:number,b:number=6){
    console.log("Value of a is "+a);//4
    console.log("Value of b is "+b);//6
    console.log("Addition of a+b is "+(a+b)); //10
}

// add3(4);

function add4(a:number=5,b:number){
    console.log("Value of a is "+a);//4
    console.log("Value of b is "+b);//6
    console.log("Addition of a+b is "+(a+b)); //10
}

// add4(8,4)

function add5(a:number=5,b?:number){
    console.log("Value of a is "+a);//5
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b)); //NAN
}

// add5();

function add6(a?:number,b:number=5){
    console.log("Value of a is "+a);//undefined
    console.log("Value of b is "+b);//5
    console.log("Addition of a+b is "+(a+b)); //NAN
}

add6();
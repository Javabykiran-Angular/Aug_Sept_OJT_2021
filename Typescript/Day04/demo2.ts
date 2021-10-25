
// anonymous Function

var temp1=function (){
    console.log("anonymous Function called...");
}

// temp1();

    var temp2=function (a:number,b:number):number{
        return (a+b);
    }

    var res=temp2(4,6);
    // console.log("Result is :: "+res);

    //fat Arrow Function/Arrow function

       var temp3=()=>{
            console.log("fat Arrow Function is called...");
        }

        // temp3();

        var temp4=(a:number,b:number):number=>{
            return (a+b);
        }

        console.log(`Addition is ${temp4(8,8)}`);

        




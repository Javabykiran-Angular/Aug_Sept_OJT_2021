
//Json Object
// json= java script Object notation
// why we use json?
// json stored a data is in key & value format

var jsonObj={
    fname:"Sumit",
    "lname":"Raokahnde",
    id:2
}
//1 dot operator
//2 Square operator

//1 dot operator

// console.log(`
//     First Name:: ${jsonObj.fname}
//     Last name :: ${jsonObj.lname}
//     ID        :: ${jsonObj.id}
// `)


//2 Square operator

// console.log(`
//     First Name:: ${jsonObj["fname"]}
//     Last name :: ${jsonObj['lname']}
//     ID        :: ${jsonObj['id']}
// `);


//Array of Object
var arrobj=[
    {
        fname:"Sumit",
        "lname":"Raokahnde",
        id:9,
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan",'Feb','March'],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:55
            },
            {
                subj:'M3',
                marks:65
            }
        ]
    },
    {
        fname:"Kiran",
        "lname":"Raokahnde",
        id:6,
        country:{
            cid:2,
            cname:'Us'
        },
        month:["May",'April','June'],
        result:[
            {
                subj:'M1',
                marks:78
            },
            {
                subj:'M2',
                marks:80
            },
            {
                subj:'M3',
                marks:92
            }
        ]
    },
    {
        fname:"Spruha",
        "lname":"Raokahnde",
        id:3,
        country:{
            cid:3,
            cname:'South Africa'
        },
        month:["July",'April','June'],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:36
            },
            {
                subj:'M3',
                marks:85
            }
        ]
    }
];

// console.log(`
// --------------------------------------------
//     First Name :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}
// `);

for (let i = 0; i < arrobj.length; i++) {
    
    console.log(`
--------------------------------------------
    First Name :: ${arrobj[i].fname}
    Last Name  :: ${arrobj[i].lname}
    ID         :: ${arrobj[i].id}
    Country    :: ${arrobj[i].country.cname}
    Month      :: ${arrobj[i].month.join("  ")}
----------------Result-------------------------
`);

for (let j = 0; j < arrobj[i].result.length; j++) {
    console.log(`
    -------------------------------------------
            Subject :: ${arrobj[i].result[j].subj}
            Marks   :: ${arrobj[i].result[j].marks}
    `);
    
}

}



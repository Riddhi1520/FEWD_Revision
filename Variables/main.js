// scopes
// BLOCK SCOPE 

if(true){
    let name = "Riddhi";
    console.timeLog("block scope")

}
console.log(name)

//  LET

// 1. Redeclaration not possible 
// 2. Reassign not possible
// let  a = 5;
// let a = 6;
a = 6;
console.log(a)
// it will show error as we reclare it

// CONST 

const a = 5;
// a = 6;
console.log(a);
// it will show error again as we cant redeclarre and reasign the value again to that variable

// VAR 

// function scope --block scope not;
if(true){
    let name = "Riddhi"
    var name2="any"
}
console.log(name2)
console.log(name)

// it will only print name2 as var is not block scope
// it will not print name a slet is block scope it will be print only if console is in between paranthesis

function a() {
    if(true){
        let name = "Parth"
        var name2 = "any"

    }
    console.log(name)
    console.log(name2)

    // It will print name2 only as var is not block scope
}
a()
console.log(name2)
// Here name2 will not also print as var is also a function scope it will print only inside a function
// const sum= ()=>
// {
//     console.log(this);
// }

// sum();

// let obj ={
//     fname:"Deepak",
//     lname:"saini",
//     greet:function()
//     {
//         console.log(obj.fname);
//         console.log(this.lname);
        
//     }
// }

// obj.greet();

// Array.prototype.sum()
// {
//      console.log("Hello"); 
// }
// let arr=[1,2,4,4];

// arr.sum();

// class Persion {
//     constructor(firstName , lastName)
//     {
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }

//     greet(){
//         console.log(`Hello ${this.firstName} ,good morning`);
        
//     }
// }

// const p1 =new Persion("Deepak","saini");

// console.log(p1)
// p1.greet() 
class Account {
    #balance; 
    constructor(name,initialBalance )
    {
        this.name =name;
        this.initialBalance=initialBalance;
    }
    get balance()
    {
        console.log(this.#balance);
    }
    set balance(amount){
        this.#balance+=amount;
    }

}

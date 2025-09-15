// let x = 5;
// let y = 10;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);


// let x = 5;
// let y ="5";

// console.log(x==y);
// console.log(x===y);

// console.log(x!=y);
// console.log(x!==y);

// console.log(0 ||[]);

// let x = 10;
// let y = 0;
// let z = -5;

// console.log(x && y && z); 
// console.log(x || y || z); 
// console.log(y || z || x); 
// console.log(z && x && y);

// let a = 5;
// let b = 0;
// let c = "Hi";
// let d = "";

// console.log(a && b && c); 
// console.log(a || b || d); 
// console.log(b || d || c); 
// console.log(c && a && d);

// let bool1 = true;
// let bool2 = false;
// let num = 0;
// let str = "Code";

// console.log(bool1 && str && num);  
// console.log(bool1 || str || num);    
// console.log(bool2 || num || str);    
// console.log(bool2 && str && num);


// let num1 = 10;
// let num2 = 0;
// let num3 = 20;

// console.log(num1 && num3); 
// console.log(num2 || num3);  
// console.log(num1 || num2); 
// console.log(num2 && num3);

// let str1 = "Hello";
// let str2 = "";
// let num1 = 42;

// console.log(str1 && num1); 
// console.log(str2 || num1); 
// console.log(str1 || str2); 
// console.log(num1 && str2);

// let isTrue = true;
// let isFalse = false;
// let num = 10;

// console.log(isTrue && num);
// console.log(isFalse || num); 
// console.log(isTrue && isFalse);   
// console.log(isFalse || isTrue);

// let num1 = 0;
// let num2 = 100;
// let str1 = "JS";
// let str2 = "";

// console.log((num1 || num2) && str1); 
// console.log((str2 || num1) || str1); 
// console.log((str1 && num2) || num1);
// console.log((num1 && str2) || str1);

// let day =4;

// switch(day){
//     case 1:
//         console.log("today is monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
// }

function squ(a)
{
    for(let i=0;i<a;i++)
    {
        let b="";
        for(let j=0;j<a;j++)
        {
            b+="* ";
            
        }
        console.log(b);
    }
}

squ(5);
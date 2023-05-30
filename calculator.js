function add(a,b){
    console.log(a+b);
};

function subtract(a,b){
    console.log(a-b);
}

function multiply(a,b){
    console.log(a*b);
}

function divide(a,b){
    console.log(a/b);
}



// Used to display what we click on the calculator display
let num1 = 1; // Will be the first num
let num2 = 3; // Will be the second num
let operator = 0;// will be the operator 



function operate(operator=0, num1, num2){
    console.log(add(num1,num2));
}
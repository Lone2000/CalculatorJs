function add(a,b){
    return parseInt(a) + parseInt(b);
};

function subtract(a,b){
    return parseInt(a) - parseInt(b);
}

function multiply(a,b){
    return parseInt(a) * parseInt(b);
}

function divide(a,b){
    return parseInt(a) / parseInt(b);
}



// Used to display what we click on the calculator display
let num1 = 1; // Will be the first num
let num2 = 3; // Will be the second num
let operator = 0;// will be the operator 



function operate(operator=0, num1, num2){
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1,num2);
        default:
            console.log(`ERROR OCCURRED`);
    }


}


// Put a event listener on calculator div
const calculator = document.getElementById("calculator");

calculator.addEventListener('click', (e)=>{
    
    
    display_value = e.target.className;
    let result = "";
    // Display on screen of calculator
    const screen = calculator.querySelector(".display")
    
    if(!(display_value.includes('clear')) && !(display_value.includes('container')) && !(display_value.includes('equal')) && !(display_value.includes('display'))){
        screen.value += display_value;
    };
    
    // Handle Display (Number // Operator // Number...)
    if (e.target.className == 'equal'){
        // Trigger the sort_value
        num1,num2,operator = sortValue(screen.value);
        result = operate(operator,num1,num2);
        // Handle Display Result
        if(!(result == 'ERROR OCCURRED')){
            screen.value = result;
        }
    };
    // Listen for clear button as well
    if(e.target.className == 'clear'){
        clearDisplay(screen);
    }

});


function clearDisplay(screen){
    screen.value = "";
}

function sortValue(value){
    let index = "";
    // First Number
    ["+","*","/","-"].forEach((oper)=>{
       if(value.includes(oper)){
        index = value.indexOf(oper);
       }
    });
    num1 = value.slice(0,index);
    num2 = value.slice(index+1);
    operator = value[index];
    return num1,num2,operator
};
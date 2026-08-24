let currentInput = '';
let currentOperation = '';
let previousInput = '';

// Function for Calculating 

function calculator (a, b, c) {
    let output = 0;

    try {

        switch(c) {
            case '+':
                output = a + b
                break;
            
            case '*':
                output = a * b
                break;
            
            case '-':
                output = a - b
                break;

            case '%':
                if (b === 0) {
                    throw "Can't divide by 0!"
                } else {
                    output = a % b
                }
                break;
        }
    }
    catch(e) {
        console.log("There's an error: ", e)
    }
    return output;
}

// Function for Appending the Numbers

function appendNum(number) {
    currentInput += number;
    document.getElementById('display').value = 
    `${previousInput} ${currentOperation} ${currentInput}`;
};

// Function for Appending the Operation

function appendOp(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculator();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
};

// Function for Clearing Display

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
};
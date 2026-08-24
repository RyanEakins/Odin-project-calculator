let currentInput = ''; // Stores current number being typed.
let currentOperation = ''; // Stores current operation being typed.
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
        return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

// Function for Appending the Numbers
// This function adds the numbers clicked by the user into the currentInput and updates the display. 

function appendNum(number) {
    currentInput += number;
    document.getElementById('display').value = 
    `${previousInput} ${currentOperation} ${currentInput}`;
};

// Function for Appending the Operation
// This function adds the operation, appends it, and prepares for the next number clicked. 

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
// Resets all inputs and updates the display to be cleared. 

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
};
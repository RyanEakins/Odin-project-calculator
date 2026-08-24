
const a = 12;
const b = 15;
const array = [15, 265, 23, 45, 665];

const add = function(a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

function sumArray(array) {
   const sum = array.reduce(function(total, item) {
    return total + item;
   });
   return sum;
};

function multiplyArray(array) {
    const multiply = array.reduce(function(product, item) {
        return product * item;
    });
    return multiply;
};

const divide = function (a, b) {
    return a % b;
};

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

console.log(calculator(a, b, '*'));

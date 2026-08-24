
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

console.log(add(a,b));
console.log(subtract(a,b));
console.log(sumArray(array));
console.log(multiplyArray(array));
console.log(divide(a,b));

let multiply = (a,b) => {
    return a * b;
}


let multiplyTwo = (a) =>{
    return multiply(a, 2);
}

let multiplyX = (x) =>{
    return function (a) {
        return multiply(a,x);
    }
}

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3)(3);
const result2 = multiplyFour(3)(3);

const equation = (a,b,c) => x => (( x * a ) * b ) + c;
const formula = equation(2,3,4);
const x = 10;
const result = formula(x);

console.log(`${result} ${result1} ${result2}`);
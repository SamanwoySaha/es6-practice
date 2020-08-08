// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const bishal = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(5);
console.log(result);
console.log(add(4, 5));
console.log(give5());
console.log(bishal(7, 5));
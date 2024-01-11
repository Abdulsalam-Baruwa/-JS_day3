'use strict';

// Declare a function fullName and it print out your full name.

// const fullName = function () {
//     console.log('Abdulsalam Baruwa');
// }

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Declare a function addNumbers and it takes two two parameters and it returns sum
const addNumbers = function (x, y) {
    const sum = x + y;
    return sum;
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
const areaOfRectangle = function (length, width) {
    area = length * width;
    return area;
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle
const perimeterOfRectangle = function (length, width) {
    const perimeter = 2 * (length + width);
    return perimeter;
}

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = function (x, y, z) {
    const arrOfNum = [x, y, z];
    let largestNum = x;
    for (let i = 0; i < arrOfNum.length; i++) {
        if (arrOfNum[i] > largestNum) {
            largestNum = arrOfNum[i];
        }
    }
    return largestNum;
}
// test
console.log(findMax(0, 20, 25));
console.log(findMax(0, -10, -2));
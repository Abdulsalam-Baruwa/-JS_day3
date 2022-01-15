// Write a JavaScript program to find the largest number among three numbers. Display the largest number.

// variable declaration and initialization
var x, y, z;
var x = 7, y = 8, z = 15;

// Find the largest number and display it
if ((x > y) && (x > z)) {
  console.log("The largest number is " + x);
}else if ((y > x) && (y > z)) {
  console.log("The largest number is " + y);
}else {
  console.log("The largest number is " + z);
}
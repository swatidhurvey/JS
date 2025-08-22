// 9. Accept three sides of a triangle and calculate area using Heron’s formula.
let a=Number(prompt("enter one side of triangle:"));
let b=Number(prompt("enter second side of triangle:"));
let c=Number(prompt("enter third side of triangle"));
let s=(a+b+c)/2;
let area= Math.sqrt(s*(s-a)*(s-b)*(s-c)) ;
console.log("Area of triangle:",area.toFixed(2));
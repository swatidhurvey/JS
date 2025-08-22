// 11. Accept radius and find circumference and area of a circle.
let radius=Number(prompt("enter of radius of the circle:"));
let circumference=2*Math.PI*radius;
let area=Math.PI*Math.pow(radius,2);
console.log("circumference",circumference.toFixed(2));
console.log("Area:",area.toFixed(2)); 
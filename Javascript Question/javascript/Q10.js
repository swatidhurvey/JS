//  10. Accept radius and calculate the surface area of a sphere.
let radius=Number(prompt("Enter radius of the sphere:"));
let surfaceArea=4*Math.PI*Math.pow(radius,2);
console.log("Surface Area of sphere:",surfaceArea.toFixed(2));
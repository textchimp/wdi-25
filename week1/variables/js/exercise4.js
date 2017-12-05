// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

const radius = 72;
const circumference = 2 * radius * Math.PI;
const area = Math.PI * radius * radius;  // Math.pow(radius, 2)   OR radius**2

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);

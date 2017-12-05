// The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

const calcCircumference = function( radius ){

  const circumference = 2 * radius * Math.PI;
  console.log(`The circumference is ${circumference}`);

};

const calcArea = function( radius ){

  const area = Math.PI * radius * radius; // pi r squared
  console.log(`The area is ${area}`);
};

calcCircumference( 72 );

calcArea( 72 );

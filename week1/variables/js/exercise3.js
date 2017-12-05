//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 50;
const maximumAge = 60;
const amountPerDay = 5;

const yearsRemaining = maximumAge - currentAge;
const amountPerYear  = amountPerDay * 365.25;

const totalSnacksRequired = yearsRemaining * amountPerYear;

console.log( `You will need ${totalSnacksRequired} to last you until the ripe old age of ${maximumAge} `);

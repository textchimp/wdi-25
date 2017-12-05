// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 47;

let fahrenheitTemp = (celsiusTemp * 1.8) + 32;

console.log(`${celsiusTemp}˚C is ${ fahrenheitTemp.toFixed(2) }˚F`);

fahrenheitTemp = 116.6;
celsiusTemp = (fahrenheitTemp - 32) / 1.8;

console.log(`${fahrenheitTemp}˚F is ${ celsiusTemp.toFixed(2) }˚C`);

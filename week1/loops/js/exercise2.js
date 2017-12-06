// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//

for (let i = 0; i <= 10; i++) {
  // let result = i * 9;
  console.log(`${i} * 9 = ${ i * 9 }`);
}

let totalIterations = 0;

for (let i = 0; i <= 10; i++) {

  for( let j = 1; j <= 10; j++ ){

    if( (i * j) % 10 === 0 ){
      console.log(`%c${i} * ${j} = ${ i * j }`, 'color: red; font-size: 16pt; background-color: hotpink');
    } else {
      console.log(`${i} * ${j} = ${ i * j }`);
    }
    totalIterations++;

  } // inner for

} // outer for

console.log(`The innermost loop body ran ${totalIterations} times`);

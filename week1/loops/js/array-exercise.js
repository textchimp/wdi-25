// Your top choices
//
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//

const dogs = [
  'Novia Scotia Duck Tolling Retriever',
  'Leonberger',
  'Husky',
  'Spaniel',
  'Chilean Terrier',
  'Labrador'
];

const suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th'];

for (let i = 0; i < dogs.length; i++) {

  let currentDog = dogs[i];

  // console.log(`My ${ i + 1 }st choice of dog is a ${currentDog}`);

  // if( i === 0 ){
  //   console.log(`My ${ i + 1 }st choice of dog is a ${currentDog}`);
  // } else if ( i === 1 ){
  //   console.log(`My ${ i + 1 }nd choice of dog is a ${currentDog}`);
  // } else if( i === 2 ){
  //   console.log(`My ${ i + 1 }rd choice of dog is a ${currentDog}`);
  // } else {
  //   console.log(`My ${ i + 1 }th choice of dog is a ${currentDog}`);
  // }

  const suffix = suffixes[ i ];  // get the right suffix for this number: 1st, 2nd, etc

  console.log(`My ${ i + 1 }${suffix} choice of dog is ${currentDog} `);


}

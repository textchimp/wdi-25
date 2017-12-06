// The Grade Assigner
//
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A" (90 or above), "B" (80 or above), "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function( score ){

  if( score >= 90 ){
    return 'A';
  }
  if( score >= 80 ){
    return 'B';
  }
  if( score >= 70 ){
    return 'C';
  }
  if( score >= 60 ){
    return 'D'
  }

  return 'F';
};

for( let i = 60; i <= 100; i++ ){
  // const grade = assignGrade( i );
  console.log(`For ${i}, you got a ${ assignGrade( i ) }`);
}

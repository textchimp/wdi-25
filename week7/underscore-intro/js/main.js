console.log('Welcome to Underscore');

const bros = "Groucho Harpo Chico".split(' ');

_.each(bros, function( elem, index ){
  console.log( index, elem );
});

console.log('-----------------------')

// Also works, more Ruby-style:
// _(bros).each(function( elem ){
//   console.log( elem );
// })

// Equivalent to:
// bros.forEach(function( elem ){
//   console.log( elem );
// });

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

// Doesn't work
// groucho.forEach(function( elem ){
//   console.log( elem );
// })

_.each(groucho, function( val, key ){
  // console.log(`key: ${key}, val: ${val}`);
  console.log({key, val});
});

console.log('-----------------------')

const nums = [1, 2, 3, 4, 5];

// let squares = [];
// for( let i = 0; i < nums.length; i++ ){
//   squares.push( nums[i] * nums[i] );
// }
// console.log(squares);

const squares = _.map(nums, function( n ){
  return Math.random();
});
console.log(nums);
console.log('squares:', squares);

const upcaseBros = _.map(bros, function( bro ){
  return bro + " is a Marx Brother";
});
console.log(upcaseBros);

// let runningTotal = 0;
// for( let i = 0; i < nums.length; i++ ){
//   runningTotal += nums[i];
// }
// console.log(runningTotal);

// const nums = [1, 2, 3, 4, 5];
const sum = _.reduce(nums, function( runningTotal, n ){
  return runningTotal * n;
});
console.log('sum:', sum);

console.log('-----------------------')

const brothers = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42},
  {name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39}
];

// Inspired by ActiveRecord's Brother.find_by instrument: 'guitar'
// See also _.where to return *ALL* matching records, not just the first
const guitarist = _.findWhere(brothers, {instrument: 'guitar'});
console.log(guitarist);

const over40s = _.filter(brothers, function( bro ){
  // if( bro.age > 40 ){
  //   return true;
  // } else {
  //   return false;
  // }
  return bro.age > 40;
});
console.log('over 40s brothers: ', over40s);

console.log('-----------------------')

const ageOrderedBrothers = _.sortBy(brothers, 'age');
console.log(ageOrderedBrothers);

console.log('-----------------------')

const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];
const groupedScores = _.groupBy(scores, function( n ){
  return Math.floor( n );
});
console.log( groupedScores );

const data = [1,2,3,4,5];
const allEven = _.every(data, function( n ){
  return n % 2 === 0;
});
console.log('are they all even?', allEven);


const someEven = _.some(data, function( n ){
  return n % 2 === 0;
});
console.log('Is any of the numbers even?', someEven);

console.log('-----------------------')

console.log( ;_.contains(data, 4) );

console.log( _.pluck(brothers, 'vice') );

_.max(brothers, 'age')
_.min(brothers, 'age')

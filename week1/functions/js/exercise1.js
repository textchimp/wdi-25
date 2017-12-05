
// Store the following into variables: number of children, partners name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = function( numberOfChildren, partnerName, geographicalLocation, jobTitle ){
  return `You will be a ${jobTitle} in ${geographicalLocation} and married to ${partnerName} with ${numberOfChildren} kids`;
};
console.log( tellFortune(1, 'Jonesy', 'Hawaii', 'pro surfer') );
console.log( tellFortune(3, 'Princess Mary', 'Katoomba', 'bartender') );
console.log( tellFortune(6, 'Phyllis', 'the outback', 'hired goon') );

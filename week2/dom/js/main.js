
console.log('Hello W0rld');

const items = document.getElementsByTagName('li')

// console.log('items: ',  items );

// for( let i = 0; i < items.length; i++ ){
//   let item = items[i];
//   console.log(item.innerText);
// }


let button = document.getElementById('clicker');

// this is our callback function, our event handler for the button click
const sayHello = function( event ){
  console.log('Hello!');

  console.log('the event is: ', event);

  // this will remove the event handler (i.e. the one we're currently inside of),
  // which will have the effect of letting this button only be clicked once
  // button.removeEventListener( 'click', sayHello);
};


const iWillRunYourFunction = function( yourFunction ){
  console.log( 'You passed in as an argument: ', yourFunction );
  yourFunction();
};

console.log('Calling iWillRunYourFunction(sayHello) : ');
iWillRunYourFunction( sayHello );


// button.addEventListener( 'click', sayHello );

button.addEventListener( 'click', sayHello);

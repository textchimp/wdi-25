
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


// get a reference to the DOM node for the image of Bill
const bill = document.getElementById('bill');

// We need to set this ourselves, because it's not set for us from the CSS
bill.style.top = '0px';

// A new function we'll use to animate the image of Bill (make it move down)
const watchBillFall = function() {
  const oldTop = parseInt(bill.style.top); // get the previous value (just the number)
  const newTop = oldTop + 10;  // increment it by 10
  bill.style.top = newTop + 'px';   // set the style with our new value
  // NOTE: the image had better have 'position: relative' (or absolute) set in the stylesheet for these offsets to be applied
};

// Add ANOTHER event handler to the button, when clicked
// We'll do this using an anonymous/inline function, which
// will just cause the animation interval to start when we click it
button.addEventListener( 'click', function(){
  // Call our animation function every 200ms
  window.setInterval(watchBillFall, 200);
});

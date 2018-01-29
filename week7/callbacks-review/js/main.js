console.log("A: We're here, start of JS file.");

$(document).ready(function(){
  console.log('B: Page is loaded.');
});

console.log('C: end of the JS file.');

/////////////////////////////////////////////////

const showMessage = function(){
  console.log('Hello, this is a message.');
  return true;
};

// setTimeout( showMessage, 4000 );

/// do some ajax
// process response

console.log('In between calls to setTimeout');

// setTimeout(function(){
//   console.log('Hello again, a bit later');
// }, 6000);


///////////////////////////

const runNicely = function( cb ){

  console.log('Hello, I am about to run your function, I hope that is okay with you!');

  cb();

  console.log('I sincerely hope that went well for you. Thank you for letting me run your function, it was an honour and a pleasure.');

};

const hello = function(){
  console.log('Hello.');
}

const goodbye = function(){
  console.log('Goodbye.');
}

runNicely( hello );
runNicely( goodbye );

runNicely(function(){
  console.log('Anonymous function being called here.');
});

//////////////////////


Array.prototype.each = function(callback){
  for( let i = 0; i < this.length; i++ ){
    callback( this[i], i, this );      /// callback( 'a', 0 );
  }
};

let arr = [1,2,3,4,5,'hello'];
//
// const logIt = function(e, ind){
//   console.log('Here is your element: ', e, 'index: ', ind);
// }
//
// each(arr, logIt);

console.log('All good.');

const fetchTrivia = function(){

  const xhr = new XMLHttpRequest();

  // This is the long version; this callback will be invoked mutiple
  // times throughout the AJAX request
  //
  // xhr.onreadystatechange = function() {
  //
  //   if( xhr.readyState !== 4 ){
  //     return;
  //   }
  // Response is guaranteed to be ready by now
  // console.log('inside onreadystatechange():', xhr.readyState);


  xhr.onload = function(){

    let response = JSON.parse( xhr.responseText );
    console.log( response );

    // Vanilla JS DOM element creation hell
    const p = document.createElement('p');
    p.innerHTML = response.text;     //'<p>42 is blah blah</p>'
    document.body.appendChild( p );
    // $('<p>').html(response.text).appendTo(document);  // jQuery
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send();

}; // fetchTrivia()

// Get the first button from the DOM and attach (as an event handler)
// our AJAX fetch callback to it
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchTrivia);

// jquery: $('button').click( fetchTrivia );









// setTimeout(function(){
//   console.log('response: ', xhr.responseText );
// }, 1000);
//
// $(document).ready(function(){
//   // do something with the DOM
// });
//
// document.onload = function(){
//   // do something with the DOM
// };
//
// document.onload();

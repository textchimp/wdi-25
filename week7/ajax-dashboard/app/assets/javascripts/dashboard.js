
$(document).ready(function(){

  console.log('DOM loaded.');

  $.ajax('/uptime').done(function( data ){
    // console.log( data );
    $('#uptime').html( data );
  });


  // setInterval(function(){

    $.getJSON('/hog').done(function( data ){
      console.log( data );
      $('#hog').html( data.biggest_hog );
      $('#date').html( data.current_time );
    });

  // }, 1000);

  $.getJSON('/messages').done(function( data ){
    console.log( data );
  });

  // $.post('/messages')



});


let $body;

$(document).ready(function(){
  console.log('DOM loaded.');

  $body = $('body');

  let hue = 0;

  // These variables need to be declared *outside* of the mousemove callback where we'll be using them,
  // so that they can remember the last mouse values in between when that callback is called
  // (i.e. their scope or lifetime is larger than the callback)
  let lastMouseX = 0;
  let lastMouseY = 0;

  // mouse movement event callback, applies to whole document (not limited to a specific element)
  $(document).on('mousemove', function( event ){

    // Only draw if the shift key is held,
    // i.e. return early from this callback (don't run any of the
    // drawing code below) if it's *not* held
    if( !event.shiftKey ){
      return;
    }

    // console.log('clicked!', event);
    const mouseX =  event.pageX;
    const mouseY =  event.pageY;

    // random RGB colour for the blob
    // const r = Math.floor( Math.random() * 256 );
    // const g = Math.floor( Math.random() * 256 );
    // const b = Math.floor( Math.random() * 256 );
    // const colour = `rgb(${r}, ${g}, ${b})`;

    // Calculate mouse speed (velocity) by subtracting the previous position
    // from the current position
    // i.e. "how big a jump has there been from the last position"
    const velocityX = Math.abs( mouseX - lastMouseX );
    const velocityY = Math.abs( mouseY - lastMouseY );
    // console.log('X velocity:', velocityX);

    // Now that we've used these lastXY variables in our calculation above, set them to
    // the current mouse position values, so that next time the callback runs, they'll
    // have the correct "last" values in them
    lastMouseX = mouseX;
    lastMouseY = mouseY;

    // Set the size of the blob to be proportional to the mouse X velocity,
    // i.e. minimum of 20 pixels, with the velocity added on (multiply to see the effect more clearly)
    const size = 20 + (velocityX * 2);



    // We can set the colour (hue) to be dependent on the mouse X position by calculating
    // the X position as a percentage or float (between 0 and 1), i.e. a proportion, rather than an exact
    // pixel value - this is called 'normalizing'
    // Once we've done this, we can use it to scale any other value, such as the valid values for the
    // hue, which are 0 to 360, just by multiplying:
    //
    // const xPercent = mouseX / window.innerWidth;
    // hue = xPercent * 360;

    hue += 1;  // hue = hue + 1;
    const h = hue;
    const s = '50%';
    const l = '50%';
    const colour = `hsl(${h}, ${s}, ${l})`;


    // Create our new DIV with jQuery and set some CSS properties
    const $blob = $('<div class="blob">').css({
      backgroundColor: colour,
      width: size + 'px',
      height: size + 'px',
      top:  (mouseY - size/2) + 'px',   // we want the div to be centered on the mouse
      left: (mouseX - size/2)+ 'px'
    });

    // Append our new DIV to the page
    $body.append( $blob );


    // Make the duration of the movement animation at least 1 second long, but possibly up to 5 seconds
    const duration = 1000 + (Math.random() * 4000);

    // if( hue%2 === 0 ) {
    if( Math.random() > 0.5 ){

      // animate to move the blob straight up to above the top of the window
      $blob.animate({
        top: -size + 'px',
      }, duration, function(){
        // This callback is run when the animated is finished, so:
        // Clean up after ourselves, delete the element when it's no longer visible
        $(this).remove();
      });

    } else {

      // animate to move the blob down to the bottom of the window, but also randomize where on
      // the X axis (left to right) it will end up, for a more varied effect
      $blob.animate({
        top: window.innerHeight + 'px',
        left: (Math.random() * window.innerWidth) + 'px'
      }, duration, function(){
        $(this).remove();
      });

    }


  });  // click handler

});  // $(document).ready()

// using a pre-defined function as a callback
// const youClicked = function(){
//   console.log('You clicked on Bill.');
// };
//
// $bill.on('click', youClicked );  // no parentheses!

let $bill;

$(document).ready(function(){

  $bill = $('#bill');

  $bill.on('click', function( event ){
    console.log('You clicked on Bill.', Math.random() );
    console.log( event );

  });

  // $bill.click(function(){
  //
  // });

  $bill.on('mouseenter', function(){
    console.log('%cYou moved onto Bill.', 'color: green; font-size: 12pt');
  });

  $bill.on('mouseleave', function(){
    console.log('%cYou left Bill.', 'color: red');
  });

  let increment = -0.01;
  $bill.on('mousemove', function( event ){
    // console.log('You are moving around over Bill.');

    // const opacity = Math.random();


    let opacity = $bill.css('opacity');
    opacity = parseFloat( opacity );

    // console.log('opacity:', opacity, typeof opacity);

    //opacity -= 0.1;
    // opacity = opacity - 0.01;

    opacity = opacity + increment;  // apply the increment


    if( opacity === 1 ){
      increment = -0.01;
    } else if( opacity === 0 ){
      increment = 0.01;
    }

    console.log(`${event.offsetX},${event.offsetY}`);

    const percentageY = event.offsetY / 600;
    console.log(`percentage: ${ percentageY }`);

    $bill.css('transform', `scale(${1.0 + percentageY})`);
  });


  const $input = $('#words');

  $input.on('keyup', function(){
    console.log('You typed into the input');
    const value = $(this).val();
    console.log(`The current value is ${ value }`);
  });

  $input.on('blur', function(){
    console.log('You blurred out of this input.');
  });

  $(window).on('resize', function(){
    console.log("You are resizing!");
  })

  $('h1').funText(33, 'candy');

}); // document.ready()

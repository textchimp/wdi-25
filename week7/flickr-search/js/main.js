console.log('Ready to roll.');



const searchFlickr = function( queryText ){
  console.log({queryText});

  const flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
  //&api_key=20cd6fd304978db054d667b52da3046b&text=surfing+dogs&format=json&nojsoncallback=1'

  $.getJSON(flickrURL, {
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: queryText,
    nojsoncallback: 1,
    format: 'json'
  })
  .done(showImages)
  .fail(errorHandler);

}; // searchFlickr()

const showImages = function( data ){

  _.each(data.photos.photo, function( photo ){
    const url = generateURL( photo );
    // const $img = $('<img>', {src: url});
    // $img.appendTo('#images');
    $('<img>', {src: url}).appendTo('#images');
  });

}; // showImages()

const generateURL = function( p ){
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
};




const errorHandler = function( xhr ){
  console.error('Error requesting URL:', xhr );
};





$(document).ready(function(){

  $('#search').on('submit', function( e ){
    // When the form is submitted (enter or button)...
    e.preventDefault(); // stop the form from causing a page reload

    $('#images').empty();

    let query = $('#query').val();
    searchFlickr( query );  // Send the input text on to our search function
  });

  $(window).on('scroll', function(){

    // console.log({
    //   scrollTop: $(window).scrollTop(),
    //   documentHeight: $(document).height(),
    //   windowHeight: $(window).height()
    // });

    const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
    // console.log(scrollBottom);

    if( scrollBottom > 100 ){
      return;
    }

    // This code only runs when we get near the bottom of the page
    console.log('Near bottom of page.');

    // THIS WILL NEED TO BE THROTTLED! Look up throttling in the Underscore docs!
    // searchFlickr( $('#query').val() );

  });

});

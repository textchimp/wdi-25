console.log('Ready to roll.');

const state = {
  currentPage: 1,
  photos: [],
  currentFullscreen: null
};

const searchFlickr = function( queryText ){
  console.log({queryText}, state.currentPage);

  const flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'

  $.getJSON(flickrURL, {
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: queryText,
    nojsoncallback: 1,
    format: 'json',
    page: state.currentPage++
  })
  .done(showImages)
  .fail(errorHandler);

}; // searchFlickr()

const throttledSearchFlickr = _.throttle(searchFlickr, 5000) //, {trailing: false});

const showImages = function( data ){

  state.photos = data.photos.photo;  // set the global state so we can use it in the slideshow

  _.each(data.photos.photo, function( photo, index ){
    const url = generateURL( photo );
    // const $img = $('<img>', {src: url});
    // $img.appendTo('#images');
    const $link = $('<a>').attr('index', index).on('click', function(){
      let i = $(this).attr('index');
      showFullscreenImage( parseInt(i) );
    });
    $('<img>', {src: url}).appendTo($link);
    $link.appendTo('#images');

  });
}; // showImages()

const showFullscreenImage = function( index ){

  state.currentFullscreen = index;
  let photo = state.photos[index];

  const url = generateURL(photo, 'c');
  $('#details').html(photo.title);
  $('#fullscreen')
  .css({backgroundImage: `url(${url})` })
  .fadeIn(100);
};

const advanceSlideshow  = function( amount ){
  if( !$('#fullscreen').is(':visible') ){ return };
  debugger;
  const index = (state.currentFullscreen + amount) % state.photos.length;
  showFullscreenImage( index );
};

const generateURL = function( p, size ){
  size = size || 'q';
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
};

const errorHandler = function( xhr ){
  console.error('Error requesting URL:', xhr );
};

$(document).ready(function(){

  $(document).on('keydown', function( e ){

    if( !$('#fullscreen').is(':visible') ){ return; }

    switch(e.which){
      case 27:  // esc
        console.log('esc');
        $('#fullscreen').fadeOut(100);
        break;
      case 37: // left
        advanceSlideshow(-1);
        break;
      case 39: // right
        advanceSlideshow(1);
        break;
    }
  });

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

    throttledSearchFlickr( $('#query').val() );
  });

});

'use strict';

console.log('Ready to roll.');

var state = {
  currentPage: 1,
  photos: [],
  currentSlideshowIndex: null
};

var searchFlickr = function searchFlickr(queryText) {
  console.log({ queryText: queryText }, state.currentPage);

  var flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
  //&api_key=20cd6fd304978db054d667b52da3046b&text=surfing+dogs&format=json&nojsoncallback=1'

  $.getJSON(flickrURL, {
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: queryText,
    nojsoncallback: 1,
    page: state.currentPage++,
    format: 'json'
  }).done(showImages).fail(errorHandler);

  // state.currentPage += 1;
}; // searchFlickr()


var throttledSearchFlickr = _.throttle(searchFlickr, 5000);

var showImages = function showImages(data) {

  state.photos = data.photos.photo;

  _.each(data.photos.photo, function (photo, index) {
    var url = generateURL(photo);
    // const $img = $('<img>', {src: url});
    // $img.appendTo('#images');

    var $link = $('<a>').attr('index', index);
    $('<img>', { src: url }).appendTo($link);
    $link.appendTo('#images');
  });
}; // showImages()

var showFullscreenImage = function showFullscreenImage(index) {

  var url = generateURL(state.photos[index], 'c');

  // $('<img>', {src: url}).appendTo('#fullscreen');

  $('#details').html(state.photos[index].title);

  $('#fullscreen').css('background-image', 'url(' + url + ')').fadeIn(200);
};

var generateURL = function generateURL(p) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';

  // size = size || 'q';

  return 'https://farm' + p.farm + '.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '_' + size + '.jpg';
};

var errorHandler = function errorHandler(xhr) {
  console.error('Error requesting URL:', xhr);
};

$(document).ready(function () {

  $(document).on('keydown', function (e) {

    if (!$('#fullscreen').is(":visible")) {
      return;
    }

    // If we get to here, fullscreen div IS visible/active

    // console.log( e.keyCode, e );
    if (e.keyCode === 27) {
      $('#fullscreen').fadeOut(200);
    }
  }); // keypress handler


  // $('#images img')  - THIS RETURNS NO ELEMENTS, because there are none when it runs,
  // i.e. after the page loads (but before a search is triggered.)
  // console.log( $('#images img')  );

  // Delegate the click handling to the top-level document DOM object,
  // asking it to run our click handler only on '#images a' elements.
  // This will work even for '#images a' elements that haven't been added
  // to the page yet, i.e. elements added by our JS code in response to a search.

  $(document).on('click', '#images a', function () {
    // When an image is clicked...

    var index = $(this).attr('index'); // get the array index we stored into <a index="??">
    showFullscreenImage(index);

    // console.log( state.photos[index] );

    // const url = generateURL( state.photos[index], 'c' );
    // console.log(url);
  });

  $('#search').on('submit', function (e) {
    // When the form is submitted (enter or button)...
    e.preventDefault(); // stop the form from causing a page reload

    $('#images').empty();

    var query = $('#query').val();
    searchFlickr(query); // Send the input text on to our search function
  });

  $(window).on('scroll', function () {

    // console.log({
    //   scrollTop: $(window).scrollTop(),
    //   documentHeight: $(document).height(),
    //   windowHeight: $(window).height()
    // });

    var scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    // console.log(scrollBottom);

    if (scrollBottom > 100) {
      return;
    }

    // This code only runs when we get near the bottom of the page
    console.log('Near bottom of page.');

    // THIS WILL NEED TO BE THROTTLED! Look up throttling in the Underscore docs!
    throttledSearchFlickr($('#query').val());
  });
});
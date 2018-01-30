console.log('Loaded!');

$(document).ready(function(){

  $('#search').on('click', function(e){
    e.preventDefault();
    let query = $('#query').val();
    console.log(query);
    $('#results').empty();

    // The longest version:
    // $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
      // {
      // url: 'https://www.googleapis.com/books/v1/volumes?q=title:' + query,
      // dataType: 'json'
      // success: function(){
      //   // done!
      // },
    // }
    // )

    // $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
    // $.get('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
    // $.getJSON('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
    // $.post('https://www.googleapis.com/books/v1/volumes?q=title:' + query)

    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes',
      data: {
        q: 'title:' + query
      }
    })
    .done(function(data){

      data.items.forEach(function(elem){
        $('<h3>').html(elem.volumeInfo.title).appendTo('#results');

        // Only show authors if the property is an array and has some items
        if( (elem.volumeInfo.authors instanceof Array) && elem.volumeInfo.authors.length){
          $('<p>').html(elem.volumeInfo.authors.join(', ')).appendTo('#results');
        }

        // Only show thumbnail if it's set
        if( elem.volumeInfo.imageLinks && elem.volumeInfo.imageLinks.thumbnail ){
          $('<img>').attr('src', elem.volumeInfo.imageLinks.thumbnail).appendTo('#results');
        }

      });


    })
    .fail(function(err){
      console.warn(err);
      $('<h1>').html(err.responseText).appendTo('#results');
    });

  }); // click handler

}); // $(document).ready

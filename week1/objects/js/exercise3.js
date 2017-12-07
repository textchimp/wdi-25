/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

const favouriteMovie = {
  title: 'Inherent Vice',
  duration: 125,
  stars: ['Joaquim Phoenix', 'Josh Brolin', 'Owen Wilson']
};

const movieInfo = function( movie ){
  console.log(`${ movie.title } lasts for ${ movie.duration } minutes.`);
  console.log(`Stars: ${ movie.stars.join(', ') }`);
};

movieInfo( favouriteMovie );

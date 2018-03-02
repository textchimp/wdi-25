const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

app.use( express.static('public') );

let stream = client.stream('statuses/filter', {track: 'sunset'});


server.listen(3000, () => {
  console.log('Listening on port 3000...');
});

//                  function(socket){
io.on('connection', socket => {

  socket.emit('news', { message: 'Hello from the backend', status: 'happy' });

  stream.on('data', tweet => {
    console.log(tweet && tweet.text);
    socket.emit('tweet', tweet);
  });

  socket.on('frontend-response', data => {
    console.log('got "frontend-response" message from browser:', data);
  });

});

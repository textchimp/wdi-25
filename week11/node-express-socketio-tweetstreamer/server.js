const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: 'arbzhOfi37NtXwXxbbm6nUDRo',
  consumer_secret: 'UlRxfvXA6ZFNgCuXZDr72tD1eDTKUn2HhGEyeNamsyIyjCXDjS',
  access_token_key: '635341232-cj8WFZYn6qBpZNutCsi4iaS7B4alQGGxwyggwRyK',
  access_token_secret: 'ZkOAA3aRdFtXMcLXvYnH1l15n8cEIBoDOOEDDRUiHzX1g'
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

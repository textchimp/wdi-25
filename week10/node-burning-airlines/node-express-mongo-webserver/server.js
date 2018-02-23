const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
let db = null;

MongoClient.connect('mongodb://127.0.0.1:27017/ba', function(err, client){
  if( err ) return console.log(err);

  db = client.db('ba');

  app.listen(3000, function(){
    console.log('Server listening on port 3000...');
  });
});

// Only start webserver if we have made a successful MongoDB connection
app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true}) );

app.get('/', function(req, res){
  res.send('<h1>Hello world I AM THE GREATEST!</h1>' + req.query['message'] );
});

app.get('/flights', function(req, res){

  db.collection('flights').find({}).toArray(function(err, results){
    console.log(results);
    res.json(results);
  });

  // res.send('Flights Index');
});

app.get('/flights/search', function(req, res){
  // console.log(req.query);
  // res.send(req.query);

  db.collection('flights')
  .find({ origin: req.query['origin'], destination: req.query['destination'] })
  .toArray(function(err, results){
    res.json(results);
  });

});

app.get('/flights/:id', function(req, res){
  db.collection('flights')
  .findOne({ number: req.params.id }, function(err, result){
    res.json(result);
  });
});

app.post('/reservations', function(req, res){
  console.log(req.body);

  db.collection('flights').update(
    { number: req.body.flight_number },  // match condition
    {
      $addToSet: {
        reservations: {
          row: req.body.row,
          col: req.body.col,
          passenger: {
            id: req.body.passenger_id,
            email: 'who cares'
          }
        }
      }
    }, // data to update with
    function(err, result){
      res.json(result);
    }
  )

});

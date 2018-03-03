const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
// Just for seed data:
// bcrypt.hash('chicken', 10, (err, result) => {
//   console.log('chicken encrypts to: ', result);
// });


const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
let db = null;

const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: 'miloLovesToast'
};

const strategy = new JwtStrategy(jwtOptions, function(jwtPayload, next){

  console.log('payload received', jwtPayload.id);
  debugger;

  // We need to use this MongoDB helper method to create a valid ID object from the ID string
  const ID = new ObjectID('5a98cca38ff287e0e565e398');

  db.collection('users')
  .findOne({ _id: ID }, function(err, result){
    console.log('result found:', result, err);
    if( result ){
      next(null, result); // run the final callback in the app.get('/seekrit') route below
    } else {
      next(null, false); // trigger the error for that route
    }
  });

});

passport.use( strategy );
app.use( passport.initialize() );
app.use( cors() ); // add 'Access-Control-Allow-Origin: *' header for us, i.e. allow cross-origin requets
app.use( bodyParser.json() );  // for JSON POST requests
app.use( bodyParser.urlencoded({ extended: true }) );  // for HTML POST requests


MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
  if( err ) return console.log(err);

  db = client.db('movies');

  // Only start our webserver if we have connected to MongoDB successfully
  app.listen(3000, () => {
    console.log('Server listening on port 3000...');
  });

});

// test on command line:
// curl -H "Content-Type: application/json" -d '{ "auth": {"email":"abc","password":"xyz"}}' http://localhost:3000/login
app.post('/login', (req, res) => {
  console.log('POST /login');

  console.log('body', req.body);

  let email, password;

  if(req.body.auth.email && req.body.auth.password){
     email = req.body.auth.email;
     password = req.body.auth.password;
  } else {
    res.status(422).json({ error: "missing parameters" });
    return;
  }
  console.log('credentials', email, password);

  // Check DB for user with this email address, and then compare password -
  // if we have a match, respond with a new JWT token
  db.collection('users').findOne({ email: email }, (err, user) => {

    if( !user || err ){
      console.error('Login failure', {email, password, err});
      res.status(401).json({ error: 'No such user', err});
      return;
    }

    bcrypt.compare(password, user.password, (err, match) => {
      if( match ){
        // Set JWT token if passwords match
        const payload = { id: user._id };
        const token = jwt.sign( payload, jwtOptions.secretOrKey );
        res.status(201).json({ message: 'ok', jwt: token });
      } else {
        console.error('Passwords do not match', {email, password});
        res.status(401).json({ error: 'Passwords do not match', err});
        return;
      }
    });



  });


  // res.json({ email, password });

});


app.get('/seekrit', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({ message: 'Success! You can not see this page without a token.'})
});

app.get('/user/:email', (req, res) => {

  db.collection('users').findOne({ email: req.params.email },  (err, result) => {
    res.json( result );
  });

});

app.get('/', (req, res) => {

  res.json({ authHeader: req.get('Authorization') });
  // db.collection('users').find().toArray( (err, results) => {
  //   res.json( results );
  // });

});

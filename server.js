// require express
var express = require('express');
// new express app
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');

// ROUTES

// HTML endpoints

app.get('/', function homepage (req, res){
  res.sendFile(__dirname + '/views/index.html')
});

// JSON API endpoints



//

// ROUTES

// listen on port 3000
app.listen(process.env.PORT || 3000, function (){
  console.log('Server is up on http://localhost:3000/');
});
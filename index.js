var express =  require('express');
var cors = require('cors');
var $ = require("jquery");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.set('port', (process.env.PORT || 5000));

app.get('/', jsonParser, function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.post('/calc', function(req, res){
  if (!req.body) return res.sendStatus(400);
  console.log("The Request body is: " + req.body[0]);
  console.log("getting to the calc request");
  var result = req.body[0]*req.body[1]
  var numbers = {  total: result};
  res.send(numbers)
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});
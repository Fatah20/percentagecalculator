


var express = require('express');
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

app.get('/', jsonParser, function (request, response) {
  response.send('Hello World!')
});

app.post('/whatis', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var result = calculate(req, "/whatis");
  //var result = req.body[0]*req.body[1]
  var numbers = { total: result };
  res.send(numbers)
});

app.post('/iswhat', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var result = calculate(req, "/iswhat");
  //var result = req.body[0]*req.body[1]
  var numbers = { total: result };
  res.send(numbers)
});

app.post('/incDec', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var result = calculate(req, "/incDec");
  //var result = req.body[0]*req.body[1]
  var numbers = { total: result };
  res.send(numbers)
});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});

function calculate(req, type) {
  fnumber = req.body[0];
  snumber = req.body[1];
  if (type == "/whatis") {
    result = (fnumber / 100) * snumber;
    return result;
  }
  else if (type == "/iswhat") {
    result = (fnumber / snumber) * 100;
    return result;
  }
  else if (type == "/incDec") {
    difference = (snumber - fnumber);
      result = (difference / fnumber) * 100;
      return (result);
   
   
   
  }
}
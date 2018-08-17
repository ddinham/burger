var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ 
  defaultLayout: "main"
 }));
app.set("view engine","handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use('/',routes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});


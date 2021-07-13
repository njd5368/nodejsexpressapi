const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const recipes = require("./api/recipes");
const app = express();

var pgp = require('pg-promise')(/*options*/);
console.log("Connecting to database...")
var db = pgp('postgres://p32001f:eeje5EiRoo9atha3ooLo@reddwarf.cs.rit.edu:5432/p32001f');
console.log("Database connected.")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    var recipes = db.any("SELECT recipe_name FROM recipe WHERE recipe_id = 137739")
    res.send(recipes);
});

server = app.listen(3000, () => {
    console.log("Connected to port 3000...");
});

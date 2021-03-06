const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const app = express();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//For Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//Routing
const router = require("./routing/routes")(app);

app.listen(PORT, function(err) {
  if (!err) console.log(`Server listening on PORT: ${PORT}`);
  else console.log(err);
});

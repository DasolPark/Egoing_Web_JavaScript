var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/load/interaction.html");
});

app.listen("8888", function() {
  console.log("port 8888!");
});

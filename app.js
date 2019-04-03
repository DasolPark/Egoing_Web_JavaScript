var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/load/interaction.html");
});

app.get("/bio", function(req, res) {
  res.sendFile(__dirname + "/load/netComAJAXGet.html");
});

app.get("/bioText", function(req, res) {
  res.sendFile(__dirname + "/load/Bio.txt");
});

app.get("/Layer.png", function(req, res) {
  res.sendFile(__dirname + "/load/Layer.png");
});

app.listen("8888", function() {
  console.log("port 8888!");
});

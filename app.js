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

app.get("/info", function(req, res) {
  res.sendFile(__dirname + "/load/info.JSON");
});

app.post("/info", function(req, res) {
  res.sendFile(__dirname + "/load/info.JSON");
});

app.get("/jsonajax", function(req, res) {
  res.sendFile(__dirname + "/load/JSONAJAXGet.html");
});

app.get("/jsonajaxpost", function(req, res) {
  res.sendFile(__dirname + "/load/JSONAJAXPost.html");
});

app.get("/jsonajaxjqget", function(req, res) {
  res.sendFile(__dirname + "/load/JSONAJAXjQueryGet.html");
});

app.listen("8888", function() {
  console.log("port 8888!");
});

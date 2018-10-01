const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  const animal = req.params.animal.toLowerCase();
  const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    cat: "Meow",
    goldfish: "..."
  };
  const sound = sounds[animal];
  res.send(`The ${animal} says "${sound}"`);
});

app.get("/repeat/:message/:times", function(req, res) {
  const message = req.params.message;
  let times = Number(req.params.times);
  let result = "";
  for (let i = 0; i < times; i++) {
    result += message + " ";
  }
  res.send(result);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function() {
  console.log("Now serving your app!");
});
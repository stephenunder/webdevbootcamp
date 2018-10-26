const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const seedDB = require("./seeds");


mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();


app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  })
});

app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  let desc = req.body.description;
  let newCampground = {name: name, image: image, description: desc};
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
        // redirect back to campgrounds page
        res.redirect("/campgrounds");
    }
  })
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.get("/campgrounds/:id", function (req, res) {
  // find the campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
        console.log(foundCampground);
        // render show template with that campground
        res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(3000, () => {
  console.log("The YelpCamp Server Has Started!");
});
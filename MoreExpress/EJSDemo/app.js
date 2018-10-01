const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    const thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    const posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Stephen"}
    ];

    res.render("posts", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is listening!");
});
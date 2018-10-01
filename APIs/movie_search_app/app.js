const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    const query = req.query.search;
    const url = "https://www.omdbapi.com/?apikey=thewdb&s=" + query;

    request(url , function(error, response, body) {
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, function() {
    console.log("Movie app has started!");
});
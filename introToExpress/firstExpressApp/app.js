var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
   res.send("Hi There!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
   res.send("Welcome to the " + subreddit + "subreddit."); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
   res.send("Welcome to the comments page!"); 
});

// "*" => "You are a star!"
app.get("*", function(req, res){
    res.send("You are a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started and listening on port: " + process.env.PORT);
});
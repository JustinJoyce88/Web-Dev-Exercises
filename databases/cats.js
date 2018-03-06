var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var newCat = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// newCat.save(function (err, cat) {
//     if (err) {
//         console.log("Something went wrong.");
//     } else {
//         console.log(cat + "Saved to database.");
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if (err) {
        console.log(err);
    } else {
        console.log(cat + "Saved to database.");
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log(err);
    } else {
        console.log(cats);
    }
});
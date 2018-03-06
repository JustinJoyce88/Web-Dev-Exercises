var movies = [{
        title: "In Bruges",
        Rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        Rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        Rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        Rating: 3.5,
        hasWatched: false
    }
]

function buildString(movies) {
    var result = "";
    if (movies.hasWatched) {
        result += ("You have watched \"" + movies.title + "\" - " + movies.Rating + " stars");
    } else {
        result += ("You have not seen \"" + movies.title + "\" - " + movies.Rating + " stars");
    }
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
})
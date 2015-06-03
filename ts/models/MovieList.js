/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var MovieList = (function () {
        function MovieList(id, overview, release_date, popularity, picture, title, vote_average, vote_count, actors) {
            this.id = id;
            this.overview = overview;
            this.release_date = release_date;
            this.popularity = popularity;
            this.picture = picture;
            this.title = title;
            this.vote_average = vote_average;
            this.vote_count = vote_count;
            this.actors = actors;
        }
        return MovieList;
    })();
    movie.MovieList = MovieList;
})(movie || (movie = {}));
//# sourceMappingURL=MovieList.js.map
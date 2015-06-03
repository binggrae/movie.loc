/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var MovieItem = (function () {
        function MovieItem(id, overview, release_date, popularity, picture, title, vote_average, vote_count) {
            this.id = id;
            this.overview = overview;
            this.release_date = release_date;
            this.popularity = popularity;
            this.picture = picture;
            this.title = title;
            this.vote_average = vote_average;
            this.vote_count = vote_count;
        }
        return MovieItem;
    })();
    movie.MovieItem = MovieItem;
})(movie || (movie = {}));
//# sourceMappingURL=MovieItem.js.map
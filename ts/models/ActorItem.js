/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var ActorItem = (function () {
        function ActorItem(id, picture, name, birthday, films) {
            this.id = id;
            this.picture = picture;
            this.name = name;
            this.birthday = birthday;
            this.films = films;
        }
        return ActorItem;
    })();
    movie.ActorItem = ActorItem;
})(movie || (movie = {}));
//# sourceMappingURL=ActorItem.js.map
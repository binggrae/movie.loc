/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var ActorList = (function () {
        function ActorList(id, picture, name) {
            this.id = id;
            this.picture = picture;
            this.name = name;
        }
        return ActorList;
    })();
    movie.ActorList = ActorList;
})(movie || (movie = {}));
//# sourceMappingURL=ActorList.js.map
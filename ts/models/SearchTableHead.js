/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var SearchTableHead = (function () {
        function SearchTableHead(name, title, sort) {
            if (sort === void 0) { sort = null; }
            this.name = name;
            this.title = title;
            this.sort = sort;
        }
        return SearchTableHead;
    })();
    movie.SearchTableHead = SearchTableHead;
})(movie || (movie = {}));
//# sourceMappingURL=SearchTableHead.js.map
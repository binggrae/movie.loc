/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var SearchCtrl = (function () {
        function SearchCtrl($scope, $state, $stateParams, ApiService) {
            this.$scope = $scope;
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.ApiService = ApiService;
            this.movies = [];
            this.order = [];
            this.tablehead = [
                { name: 'picture', title: "Picture", sort: 0 },
                { name: 'title', title: "Title", sort: 0 },
                { name: 'popularity', title: "Popularity", sort: 0 },
                { name: 'vote', title: "Vote", sort: 0 },
            ];
            this.query = $stateParams.query;
            this.run();
            $scope.vm = this;
        }
        SearchCtrl.prototype.search = function () {
            this.$state.go('search', { query: this.query }, { notify: false });
            this.run();
        };
        SearchCtrl.prototype.sortReorder = function (col, e) {
            var _this = this;
            if (e.shiftKey) {
                var sortIndex = 0;
                angular.forEach(this.tablehead, function (el) {
                    if (Math.abs(el.sort) > sortIndex)
                        sortIndex = Math.abs(el.sort);
                });
                angular.forEach(this.tablehead, function (el) {
                    if (el.name == col)
                        el.sort = el.sort ? -el.sort : sortIndex + 1;
                });
            }
            else {
                angular.forEach(this.tablehead, function (el) {
                    if (el.name == col)
                        el.sort = el.sort > 0 ? -1 : 1;
                    else
                        el.sort = null;
                });
            }
            angular.forEach(this.tablehead, function (h) {
                if (h.sort > 0)
                    _this.order[h.sort - 1] = h.name;
                if (h.sort < 0)
                    _this.order[Math.abs(h.sort) - 1] = '-' + h.name;
            });
        };
        SearchCtrl.prototype.run = function () {
            var _this = this;
            if (!this.query) {
                return;
            }
            this.ApiService.search(this.query).then(function (res) {
                _this.movies = res.data;
            });
        };
        SearchCtrl.$inject = [
            '$scope',
            '$state',
            '$stateParams',
            'ApiService'
        ];
        return SearchCtrl;
    })();
    movie.SearchCtrl = SearchCtrl;
})(movie || (movie = {}));
//# sourceMappingURL=SearchCtrl.js.map
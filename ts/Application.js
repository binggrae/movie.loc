/// <reference path='_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var app = angular.module('movie', [
        'ui.router'
    ]);
    var Config = (function () {
        function Config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('index', {
                url: "/",
                templateUrl: "/ts/views/search.html",
                controller: movie.SearchCtrl,
                controllerAs: 'vm'
            })
                .state('search', {
                url: "/search/:query",
                templateUrl: "/ts/views/search.html",
                controller: movie.SearchCtrl,
                controllerAs: 'vm'
            })
                .state('item', {
                url: "/item/:id",
                templateUrl: "/ts/views/item.html",
                controller: movie.ItemCtrl,
                controllerAs: 'vm'
            })
                .state('actor', {
                url: "/actor/:id",
                templateUrl: "/ts/views/actor.html",
                controller: movie.ActorCtrl,
                controllerAs: 'vm'
            });
        }
        Config.$inject = ['$stateProvider', '$urlRouterProvider'];
        return Config;
    })();
    app.config(Config);
})(movie || (movie = {}));
//# sourceMappingURL=Application.js.map
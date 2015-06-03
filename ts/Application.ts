/// <reference path='_all.ts' />

module movie {
    'use strict';
    var app = angular.module('movie', [
        'ui.router'
    ]);

    class Config {
        constructor($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
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
                })
        }

        static $inject = ['$stateProvider', '$urlRouterProvider'];

    }

    app.config(Config);

}
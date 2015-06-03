/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var ApiService = (function () {
        function ApiService($http) {
            this.$http = $http;
        }
        ApiService.prototype.item = function (id) {
            return this.$http.get('http://beta.json-generator.com/api/json/get/KOFtlX7', {
                params: { id: id }
            });
        };
        ApiService.prototype.search = function (query) {
            return this.$http.get('http://beta.json-generator.com/api/json/get/KoghAz5', {
                params: { query: query }
            });
        };
        ApiService.prototype.actor = function (id) {
            return this.$http.get('http://beta.json-generator.com/api/json/get/LlYvwqd', {
                params: { id: id }
            });
        };
        ApiService.$inject = ['$http'];
        return ApiService;
    })();
    movie.ApiService = ApiService;
    angular.module('movie')
        .factory('ApiService', function ($http) { return new movie.ApiService($http); });
})(movie || (movie = {}));
//# sourceMappingURL=ApiService.js.map
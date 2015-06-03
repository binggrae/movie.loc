/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class ApiService {

        constructor(private $http : ng.IHttpService) {}

        static $inject = ['$http'];

        public item(id): ng.IPromise<any> {
            return this.$http.get('http://beta.json-generator.com/api/json/get/KOFtlX7', {
                params: {id: id}
            });
        }

        public search(query:string): ng.IPromise<any> {
            return this.$http.get('http://beta.json-generator.com/api/json/get/KoghAz5', {
                params: { query: query }
            });
        }

        public actor(id): ng.IPromise<any> {
            return this.$http.get('http://beta.json-generator.com/api/json/get/LlYvwqd', {
                params: {id: id}
            });
        }

    }

    angular.module('movie')
        .factory('ApiService', ($http) => {return new movie.ApiService($http)});
}



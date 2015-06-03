/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class ItemCtrl {

        public item: MovieItem;

        constructor(
            private $scope: IItemScope,
            private $stateParams:IItemParams,
            private ApiService:ApiService
        ) {
            ApiService.item($stateParams.id).then((res) => {
                this.item = res.data;
            });

            $scope.vm = this;
        }

        static $inject = ['$scope', '$stateParams' , 'ApiService'];

    }
}
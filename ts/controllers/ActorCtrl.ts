/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class ActorCtrl {

        public actor:ActorItem;

        constructor(private $scope:IActorScope,
                    private $stateParams:IActorParams,
                    private ApiService:ApiService) {
            ApiService.actor($stateParams.id).then((res) => {
                this.actor = res.data;
            });

            $scope.vm = this;
        }

        static $inject = ['$scope', '$stateParams', 'ApiService'];

    }
}
/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var ActorCtrl = (function () {
        function ActorCtrl($scope, $stateParams, ApiService) {
            var _this = this;
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            this.ApiService = ApiService;
            ApiService.actor($stateParams.id).then(function (res) {
                _this.actor = res.data;
            });
            $scope.vm = this;
        }
        ActorCtrl.$inject = ['$scope', '$stateParams', 'ApiService'];
        return ActorCtrl;
    })();
    movie.ActorCtrl = ActorCtrl;
})(movie || (movie = {}));
//# sourceMappingURL=ActorCtrl.js.map
/// <reference path='../_all.ts' />
var movie;
(function (movie) {
    'use strict';
    var ItemCtrl = (function () {
        function ItemCtrl($scope, $stateParams, ApiService) {
            var _this = this;
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            this.ApiService = ApiService;
            ApiService.item($stateParams.id).then(function (res) {
                _this.item = res.data;
            });
            $scope.vm = this;
        }
        ItemCtrl.$inject = ['$scope', '$stateParams', 'ApiService'];
        return ItemCtrl;
    })();
    movie.ItemCtrl = ItemCtrl;
})(movie || (movie = {}));
//# sourceMappingURL=ItemCtrl.js.map
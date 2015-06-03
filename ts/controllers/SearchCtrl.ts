/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class SearchCtrl {

        public movies:MovieItem[] = [];
        public query:string;
        public order:string[] = [];
        public tablehead:SearchTableHead[] = [
            {name: 'picture', title: "Picture", sort: 0},
            {name: 'title', title: "Title",  sort: 0},
            {name: 'popularity', title: "Popularity",  sort: 0},
            {name: 'vote', title: "Vote",  sort: 0},
        ];

        public static $inject = [
            '$scope',
            '$state',
            '$stateParams',
            'ApiService'
        ];

        constructor(private $scope: ISearchScope,
                    private $state: ng.ui.IStateService,
                    private $stateParams: ISearchParams,
                    private ApiService: ApiService) {
            this.query = $stateParams.query;
            this.run();

            $scope.vm = this;
        }


        public search():void {
            this.$state.go('search', {query: this.query}, {notify: false});
            this.run();
        }

        public sortReorder(col:string, e:any):void {
            if (e.shiftKey) {
                var sortIndex = 0;
                angular.forEach(this.tablehead, (el) => {
                    if (Math.abs(el.sort) > sortIndex) sortIndex = Math.abs(el.sort);
                });
                angular.forEach(this.tablehead, (el) => {
                    if (el.name == col) el.sort = el.sort ? -el.sort : sortIndex + 1;
                });
            } else {
                angular.forEach(this.tablehead, (el) => {
                    if (el.name == col) el.sort = el.sort > 0 ? -1 : 1; else el.sort = null;
                });
            }

            angular.forEach(this.tablehead, (h) => {
                if (h.sort > 0) this.order[h.sort - 1] = h.name;
                if (h.sort < 0) this.order[Math.abs(h.sort) - 1] = '-' + h.name;
            });

        }


        private run():void {
            if (!this.query) {
                return;
            }
            this.ApiService.search(this.query).then((res) => {
                this.movies = res.data;
            });
        }

    }
}
/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class SearchTableHead {
        constructor(
            public name:string,
            public title:string,
            public sort: number = null
        )
        {}

    }
}

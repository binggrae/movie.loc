/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class ActorItem {
        constructor(
            public id:number,
            public picture: string,
            public name:string,
            public birthday: string,
            public films: {
                id:number;
                picture: string;
                title: string;
            }
        )
        {}
    }
}

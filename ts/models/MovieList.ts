/// <reference path='../_all.ts' />

module movie {
    'use strict';

    export class MovieList {
        constructor(
            public id:number,
            public overview:string,
            public release_date:string,
            public popularity:number,
            public picture:string,
            public title:string,
            public vote_average:number,
            public vote_count:number,
            public actors: ActorList
        )
        {}

    }
}

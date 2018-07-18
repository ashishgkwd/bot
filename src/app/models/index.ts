import { ShowTypes, Language } from '../constants';

export interface Movie {
    title: string,
    rating: number,
    isRestricted: boolean,
    showType: ShowTypes,
    language: Language
};

export interface Comment {
    movieId:number,
    author:string,
    comment:string,
    createdAt:Date
}

export const DefaultMovie: Movie = {
    title: 'Default Title',
    rating: 0,
    isRestricted: false,
    showType: ShowTypes.ADVANCE,
    language: Language.ENGLISH
};

export class User {
    constructor(
        public id?:number,
        public username:string = '',
        public email:string = '',
        public password:string = ''
    ){};
}
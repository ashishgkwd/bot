import { ShowTypes, Language } from '../constants';

export interface Movie {
    title: string,
    rating: number,
    isRestricted: boolean,
    showType: ShowTypes,
    language: Language
};

export const DefaultMovie: Movie = {
    title: 'Default Title',
    rating: 0,
    isRestricted: false,
    showType: ShowTypes.ADVANCE,
    language: Language.ENGLISH
};
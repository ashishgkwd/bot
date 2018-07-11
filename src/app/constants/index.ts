import { InjectionToken } from "@angular/core";

export enum ShowTypes{
    GOLD = "Gold",
    VIP = "VIP",
    ADVANCE = "Advance"
}

export enum Language {
    ENGLISH = "English",
    HINDI = "Hindi"
}

export const DATE:InjectionToken<Date> = new InjectionToken<Date>('date');
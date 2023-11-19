import { type PropsOf } from 'shared/lib';

export interface ICard {
    id: number;
    NameShip: string;
    GuestDay: number;
    GuestSleeping: number;
    MaxSpeed: string;
    CruisingSpeed: string;
    Crew: number;
    image: string;
    length: number;
    budget: number;
    YachtType: string;
}

export interface ISlider extends PropsOf<'div'> {
    image: string;
    description: string;
}

export interface Data {
    YachtType: string;
    GuestSleeping: number;
    budget: number;
    length: number;
    Crew: number;
}
export interface DataFilters {
    YachtType: string | undefined;
    GuestSleeping: number | undefined;
    budget: number | undefined;
    length: number | undefined;
    Crew: number | undefined;
}
interface WeatherPrognoz {
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        feels_like: number;
        pressure: number;
    };
    rain: { h: number };
    weather: [{ description: string }];
    wind: { speed: number };
    dt_txt: string;
}

export interface Weather {
    cnt: number;
    list: WeatherPrognoz[];
    city: { name: string };
}

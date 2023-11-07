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

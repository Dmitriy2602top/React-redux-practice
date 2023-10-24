import { type FC } from 'react';
import { type PropsOf } from 'shared/lib';
import { CardShip } from 'shared/ui';

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
    current: number;
}

interface CardProps extends PropsOf<'div'> {
    cards: ICard[];
}

export const ChoiceCardShips: FC<CardProps> = ({ cards, className }) => {
    return (
        <>
            {cards.map(card => (
                <CardShip
                    className={className}
                    key={card.id}
                    Crew={card.Crew}
                    image={card.image}
                    cruisSpeed={card.CruisingSpeed}
                    current={card.current}
                    guestDay={card.GuestDay}
                    guestSleeping={card.GuestSleeping}
                    lengthShip={card.length}
                    maxSpeed={card.MaxSpeed}
                    nameShip={card.NameShip}
                />
            ))}
        </>
    );
};

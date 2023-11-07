import { type FC } from 'react';
import { CardShip } from 'entities/cardShip/ui/CardShip';
import { type PropsOf } from 'shared/lib';
import { type ICard } from 'shared/models/types';

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
                    current={card.budget}
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

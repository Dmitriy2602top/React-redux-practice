import { CardShip } from 'shared/ui';

export const FeaturedYachts = () => {
    return (
        <div className='mt-5 container grid grid-cols-4 gap-6'>
            <form className='col-span-1 bg-white'></form>
            <CardShip
                current={1000000}
                lengthShip={72}
                nameShip='TERWF'
                Crew={23}
                cruisSpeed='23км'
                guestDay={32}
                guestSleeping={3}
                maxSpeed='43км'
            />
        </div>
    );
};

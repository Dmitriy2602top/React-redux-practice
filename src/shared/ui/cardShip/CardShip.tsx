import classNames from 'classnames';
import { type FC } from 'react';
import Ship from 'shared/assets/image/ship.jpg';
import { type PropsOf } from 'shared/lib';

interface CardShipProps extends PropsOf<'div'> {
    nameShip: string;
    lengthShip: number;
    name: string;
    value: string;
}

const CardShip: FC<CardShipProps> = ({ nameShip, lengthShip, ...props }) => {
    return (
        <div {...props} className='rounded-4 grow text-text-gray bg-white'>
            <div className='flex-col flex gap-1'>
                <h1 className='text-22 font-700 text-text-accent capitalize'>TITANIA 72M</h1>
                <p className='text-14 font-600 capitalize'>Length: 236 ft 3 in ({lengthShip})</p>
            </div>
            <img className='w-full mt-3' src={Ship} alt='Ship' />
            <div className='flex flex-col gap-6'>
                <div className={classNames('flex justify-between')}>
                    <div className='text-text-gray font-600'></div>
                    <div className='text-text-accent font-600'></div>
                </div>
            </div>
        </div>
    );
};

export default CardShip;

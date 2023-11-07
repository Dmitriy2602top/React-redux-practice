import classNames from 'classnames';
import { type FC } from 'react';
import dashed from 'shared/assets/icons/dashedLine.svg';
import { type PropsOf } from 'shared/lib';

interface CardShipProps extends PropsOf<'div'> {
    nameShip: string;
    lengthShip: number;
    guestDay: number;
    guestSleeping: number;
    maxSpeed: string;
    cruisSpeed: string;
    Crew: number;
    current: number;
    image: string;
}

export const CardShip: FC<CardShipProps> = ({
    nameShip,
    lengthShip,
    image,
    guestDay,
    Crew,
    cruisSpeed,
    current,
    guestSleeping,
    maxSpeed,
    ...props
}) => {
    return (
        <div {...props} className='rounded-4 shrink flex flex-col text-text-gray bg-white'>
            <div className='flex-col px-6 py-5 flex gap-1'>
                <h1 className='text-22 font-700 text-text-accent capitalize'>{nameShip}</h1>
                <p className='text-14 font-600 capitalize'>Length: 236 ft 3 in ({lengthShip})M</p>
            </div>
            <img className='w-full mt-3' src={image} alt='Ship' />
            <div className='flex px-6 py-5 flex-col gap-1 mt-6'>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between'>
                        <div className='text-text-gray font-600'>Guest Day:</div>
                        <div className='text-text-accent font-600'>{guestDay}</div>
                    </div>
                    <img src={dashed} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={classNames('flex justify-between')}>
                        <div className='text-text-gray font-600'>Guest Sleeping:</div>
                        <div className='text-text-accent font-600'>{guestSleeping}</div>
                    </div>
                    <img src={dashed} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={classNames('flex justify-between')}>
                        <div className='text-text-gray font-600'>Max Speed:</div>
                        <div className='text-text-accent font-600'>{maxSpeed}</div>
                    </div>
                    <img src={dashed} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={classNames('flex justify-between')}>
                        <div className='text-text-gray font-600'>Cruising Speed:</div>
                        <div className='text-text-accent font-600'>{cruisSpeed}</div>
                    </div>
                    <img src={dashed} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={classNames('flex justify-between')}>
                        <div className='text-text-gray font-600'>Crew:</div>
                        <div className='text-text-accent font-600'>{Crew}</div>
                    </div>
                    <img src={dashed} />
                </div>
                <div className='flex justify-between items-center mt-4 mb-4'>
                    <div className='uppercase text-20 font-600'>
                        <span className='text-text-accent'>THB </span> <span className='text-text-form'>{current}</span>
                    </div>
                    <button className='bg-bg-blue rounded-4 capitalize text-white py-4 px-6'>veiw</button>
                </div>
            </div>
            <div className='bg-bg-blue rounded-bl-4 justify-self-end rounded-br-4 w-full h-5'></div>
        </div>
    );
};

import classNames from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { type PropsOf } from 'shared/lib';

interface WeatherThisDayProps extends PropsOf<'div'> {
    gradus: number;
    image: string;
    city: string;
    thisDay: string;
    calculationTime: string | undefined;
}

export const WeatherThisDay: FC<WeatherThisDayProps> = ({
    gradus,
    image,
    calculationTime,
    thisDay,
    className,
    city,
}) => {
    const date = new Date();
    const [data, setData] = useState<Date>(date);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={classNames('px-5 pb-5 bg-white rounded-20', className)}>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-96 font-500 leading-0 text-text-pogoda-blue'>{gradus}&deg;</h3>
                    <p className='capitalize text-black font-400 text-40'>{thisDay}</p>
                </div>
                <div className='w-24'>
                    <img className='w-full mt-4' src={image} />
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-25 text-text-pogoda-gray font-400'>
                    Текущее время: {data.getHours() < 10 ? '0' + String(data.getHours()) : data.getHours()}:
                    {data.getMinutes() < 10 ? '0' + String(data.getMinutes()) : data.getMinutes()}
                </p>
                <p className='text-25 mt-3 text-text-pogoda-gray font-400'>Время замера: {calculationTime}</p>
                <p className='text-25 text-text-pogoda-gray font-400 mt-3'>Город: {city}</p>
            </div>
        </div>
    );
};

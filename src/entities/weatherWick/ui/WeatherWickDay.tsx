import classNames from 'classnames';
import { type FC } from 'react';
import { type PropsOf } from 'shared/lib';

interface WeatherWickDayProps extends PropsOf<'div'> {
    dataDay: string | undefined;
    image: string;
    temperaturaMax: number;
    temperaturaMin: number;
    weatherDescription: string;
}

export const WeatherWickDay: FC<WeatherWickDayProps> = ({
    dataDay,
    image,
    temperaturaMax,
    temperaturaMin,
    weatherDescription,
    ...props
}) => {
    return (
        <div {...props} className={classNames('bg-blue-200 rounded-12 p-3')}>
            <h5>{dataDay}</h5>
            <img src={image} />
            <p className='text-18 font-500 '>{temperaturaMax}°</p>
            <p className='text-13 text-text-pogoda-gray font-400'>{temperaturaMin}°</p>
            <p className='text-13 text-text-pogoda-gray font-400'>{weatherDescription}</p>
        </div>
    );
};

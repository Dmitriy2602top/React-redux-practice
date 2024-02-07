import classNames from 'classnames';
import { type FC } from 'react';
import Precipitation from 'shared/assets/icons/precipitation.svg';
import Press from 'shared/assets/icons/press.svg';
import Temp from 'shared/assets/icons/temperature.svg';
import Wind from 'shared/assets/icons/wind.svg';
import { type PropsOf } from 'shared/lib';

interface WeatherDescriptionProps extends PropsOf<'div'> {
    feeling: number;
    temperatura: number;
    press: number;
    precipitation: string;
    wind: number;
}
//
export const WeatherDescription: FC<WeatherDescriptionProps> = ({
    className,
    temperatura,
    feeling,
    press,
    precipitation,
    wind,
    ...props
}) => {
    return (
        <div {...props} className={classNames('bg-white rounded-20 py-11 px-8', className)}>
            <div className='flex gap-5 items-center'>
                <div className='rounded-50 w-9 h-9 flex justify-center items-center bg-slate-200'>
                    <img src={Temp} />
                </div>
                <div className='capitalize text-24 font-400 text-text-pogoda-gray'>
                    <p>температура</p>
                </div>
                <div className='text-24 font-400 text-black'>
                    <p>
                        {temperatura}&#176; - ощущается как {feeling}&#176;{' '}
                    </p>
                </div>
            </div>
            <div className='flex gap-5 mt-6 items-center'>
                <div className='rounded-50 w-9 h-9 flex justify-center items-center bg-slate-200'>
                    <img src={Press} />
                </div>
                <div className='capitalize text-24 font-400 text-text-pogoda-gray'>
                    <p>давление</p>
                </div>
                <div className='text-24 font-400 text-black'>
                    <p>{press} мм ртутного столба</p>
                </div>
            </div>
            <div className='flex gap-5 mt-6 items-center'>
                <div className='rounded-50 w-10 h-10 flex justify-center items-center bg-slate-200'>
                    <img src={Precipitation} />
                </div>
                <div className='capitalize text-24 font-400 text-text-pogoda-gray'>
                    <p>осадки</p>
                </div>
                <div className='text-24 font-400 text-black'>
                    <p>{precipitation}</p>
                </div>
            </div>
            <div className='flex gap-5 mt-6 items-center'>
                <div className='rounded-50 w-9 h-9 flex justify-center items-center bg-slate-200'>
                    <img src={Wind} />
                </div>
                <div className='capitalize text-24 font-400 text-text-pogoda-gray'>
                    <p>ветер</p>
                </div>
                <div className='text-24 font-400 text-black'>
                    <p>{wind} м/с</p>
                </div>
            </div>
        </div>
    );
};

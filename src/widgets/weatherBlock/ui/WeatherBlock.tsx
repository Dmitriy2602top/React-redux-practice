import { type ChangeEvent, useState } from 'react';
import { WeatherDescription } from 'entities/weatherDescription';
import { WeatherThisDay } from 'entities/weatherThisDay';
import { WeatherWickDay } from 'entities/weatherWick';
import { useGetByWeatherQuery } from 'shared/api';
import { MySelect } from 'shared/ui';
import { selectParametersCity } from '../config/selectParemetersCity';

export const WeatherBlock = () => {
    const [currentCity, setCurrentCity] = useState('voronej');
    const { data: weather } = useGetByWeatherQuery({ nameCity: currentCity, days: 7 });
    const [activeDay, setActiveDay] = useState<number>(0);
    const ImagePath = 'http://openweathermap.org/img/w/';
    const changeCity = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentCity(e.target.value);
    };

    return (
        <div className='container pt-8'>
            <div className='grid grid-cols-3 gap-12'>
                <div className='bg-white rounded-4 grid-span-1 flex-col p-5'>
                    <h2 className='text-24 font-700'>Выберите город</h2>
                    <MySelect
                        isDefaultOption={false}
                        defaultValue={'voronej'}
                        className='mt-6'
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            changeCity(e);
                        }}
                        options={selectParametersCity.city}
                    />
                </div>
            </div>

            {weather !== undefined ? (
                <div className='grid gap-12 mt-12 grid-rows-2 grid-cols-3'>
                    <WeatherThisDay
                        thisDay='сегодня'
                        className='col-span-1 shadow-weatherBlock'
                        city={weather.city.name}
                        calculationTime={weather.list[activeDay].dt_txt.match(/\d\d:\d\d/)?.[0]}
                        gradus={Math.round(weather.list[activeDay].main.temp)}
                        image={ImagePath + weather.list[0].weather[0].icon + '.png'}
                    />
                    <WeatherDescription
                        className='col-span-2 shadow-weatherBlock'
                        feeling={Math.round(weather.list[activeDay].main.feels_like)}
                        precipitation={weather.list[activeDay].weather[0].description}
                        press={Math.round(weather.list[activeDay].main.pressure / 1.333)}
                        temperatura={Math.round(weather.list[activeDay].main.temp)}
                        wind={weather.list[activeDay].wind.speed}
                    />
                    <div className='col-span-3 row-span-2'>
                        <div className='flex p-5 gap-6 justify-between bg-white rounded-20 shadow-weatherBlock'>
                            {weather.list.map((day, index) => (
                                <WeatherWickDay
                                    onClick={() => {
                                        setActiveDay(index);
                                    }}
                                    key={day.dt_txt}
                                    image={ImagePath + day.weather[0].icon + '.png'}
                                    temperaturaMax={Math.round(day.main.temp_max)}
                                    temperaturaMin={Math.round(day.main.temp_min)}
                                    weatherDescription={day.weather[0].description}
                                    dataDay={day.dt_txt.match(/\d\d:\d\d/)?.[0]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

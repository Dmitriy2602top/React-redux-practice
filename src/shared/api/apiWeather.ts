import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Weather } from 'shared/models/types';

interface ObjectQuery {
    nameCity: string;
    days: number;
}

export const apiWeather = createApi({
    reducerPath: 'apiWeather',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/forecast' }),
    endpoints: build => ({
        getByWeather: build.query<Weather, ObjectQuery>({
            query: (object: ObjectQuery) => ({
                url: `?q=${object.nameCity}&lang=ru&cnt=${object.days}&units=metric&appid=b14c52e1e8a70e267a0c6d719117bbf1`,
            }),
        }),
    }),
});

export const { useGetByWeatherQuery } = apiWeather;

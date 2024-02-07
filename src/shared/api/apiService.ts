import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type ICard, type ISlider } from 'shared/models/types';

export const apiService = createApi({
    reducerPath: 'shipsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: build => ({
        fetchAllShips: build.query<ICard[], number>({
            query: (limit: number) => ({
                url: '/ships',
                params: {
                    _limit: limit,
                },
            }),
        }),
        fetchAllPosts: build.query<ISlider[], any>({
            query: () => ({
                url: '/sliders',
            }),
        }),
    }),
});

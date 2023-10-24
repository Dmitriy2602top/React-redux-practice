import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type ICard } from '../ui/ChoiceCardShips';

export const shipsApi = createApi({
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
    }),
});

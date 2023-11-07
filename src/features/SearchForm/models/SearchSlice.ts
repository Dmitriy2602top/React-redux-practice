import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Data } from 'shared/models/types';

interface DataState {
    data: Data;
}

const initialState: DataState = {
    data: {
        YachtType: '',
        GuestSleeping: 0,
        budget: 0,
        length: 0,
        Crew: 0,
    },
};

const SearchSlice = createSlice({
    name: 'searchShip',
    initialState,
    reducers: {
        dataChange(state, action: PayloadAction<Data>) {
            state.data = action.payload;
        },
    },
});

export const { dataChange } = SearchSlice.actions;
export default SearchSlice.reducer;

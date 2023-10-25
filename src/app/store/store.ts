import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shipsApi } from 'entities/choiceCardShips';

const rootReducer = combineReducers({
    [shipsApi.reducerPath]: shipsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shipsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

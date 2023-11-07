import { combineReducers, configureStore } from '@reduxjs/toolkit';
import SearchReducer from 'features/SearchForm/models/SearchSlice';
import { apiService } from 'shared/api';

const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    SearchReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

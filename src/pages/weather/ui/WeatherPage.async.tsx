import { type FC, Suspense, lazy } from 'react';

const WeatherPageAsync = lazy(async () => await import('./WeatherPage'));

export const WeatherPageSuspence: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WeatherPageAsync />
        </Suspense>
    );
};

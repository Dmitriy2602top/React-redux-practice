import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { WeatherPage } from 'pages/weather';

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainPage />,
    },
    { path: 'weather', element: <WeatherPage /> },
]);

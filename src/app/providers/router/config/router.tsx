import { Suspense } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'pages/layout';
import { MainPage } from 'pages/main';
import { WeatherPage } from 'pages/weather';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            { path: '', element: <MainPage /> },
            { path: 'weather', element: <WeatherPage /> },
        ],
    },
]);

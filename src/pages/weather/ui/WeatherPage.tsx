import { type FC } from 'react';
import { WeatherThisDay } from 'entities/weatherThisDay';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { WeatherBlock } from 'widgets/weatherBlock';

const WeatherPage: FC = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='flex-auto bg-blue-400'>
                <WeatherBlock />
            </main>
            <Footer />
        </div>
    );
};
export default WeatherPage;

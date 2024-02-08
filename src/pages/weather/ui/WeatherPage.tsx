import { type FC } from 'react';
import { WeatherBlock } from 'widgets/weatherBlock';

const WeatherPage: FC = () => {
    return (
        <div className='flex-auto bg-blue-400'>
            <WeatherBlock />
        </div>
    );
};

export default WeatherPage;

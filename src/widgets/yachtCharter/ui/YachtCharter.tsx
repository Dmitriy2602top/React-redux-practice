import { type FC } from 'react';
import { UserForm } from 'features/UserForm';
import Insta from 'shared/assets/icons/instaM.svg';
import Telega from 'shared/assets/icons/telegramM.svg';
import Watsap from 'shared/assets/icons/watsapM.svg';
import bgFon from 'shared/assets/image/bg-fon-yacht.jpg';
import { Button } from 'shared/ui/button/Button';

interface YachtCharterProps {
    title: string;
    topText: string;
    bottomText: string;
}

export const YachtCharter: FC<YachtCharterProps> = ({ title, topText, bottomText }) => {
    return (
        <div className='relative overflow-hidden pb-12'>
            <img
                className='absolute top-0 left-0 h-full object-cover -z-10 w-full'
                src={bgFon}
                alt='YACHT CHARTER PHUKET'
            />
            <div className='absolute flex bottom-0  left-0 -z-10 w-full'>
                <div className='grow bg-bg-primary'></div>
                <div className='grid container bg-bg-primary gap-6 shrink grid-cols-4 '>
                    <div className='col-span-1 bg-black text-white uppercase text-30 py-5 font-700 text-center'>
                        <h3>FEATURED YACHTS</h3>
                    </div>
                    <div className='col-span-3 flex items-end bg-bg-primary text-text-found font-600'>
                        <p>Found 25 yachts</p>
                    </div>
                </div>
                <div className='grow bg-bg-primary'></div>
            </div>
            <div className='flex justify-between container pt-14'>
                <div className='flex flex-col gap-3 max-w-yachtTitle text-white'>
                    <h4 className='text-18 font-700 uppercase leading-133%'>{topText}</h4>
                    <h1 className='text-58 font-700 uppercase'>{title}</h1>
                    <p className='text-18 font-600 leading-133%'>{bottomText}</p>
                </div>
                <div className='gap-11 flex flex-col items-center'>
                    <div className='flex flex-col gap-5'>
                        <h5 className='text-text-secondary text-center'>Write to US</h5>
                        <div className='flex gap-5'>
                            <img src={Watsap} />
                            <img src={Telega} />
                            <img src={Insta} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h5 className='text-text-secondary text-center'>Call US</h5>
                        <Button className='text-white text-24 font-700' to={'tel:+66 86 465 4545'}>
                            +66 86 465 4545
                        </Button>
                    </div>
                    <UserForm />
                </div>
            </div>
        </div>
    );
};

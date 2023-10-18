import { type FC } from 'react';
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
        <div className='relative'>
            <img className='absolute top-0 left-0 -z-10 w-full' src={bgFon} alt='YACHT CHARTER PHUKET' />
            <div className='flex justify-between container pt-14'>
                <div className='flex flex-col gap-3 text-white'>
                    <h4 className='text-18 font-700 uppercase leading-133%'>LUXURY BOAT HIRE IN PHUKET</h4>
                    <h1 className='text-58 font-700 uppercase'>YACHT CHARTER PHUKET</h1>
                    <p className='text-18 font-600 uppercase leading-133%'>
                        “Ciao cara, Tutto perfetto. Giornata top e anche al cafe Del Mar è stato molto bello.”
                    </p>
                </div>
                <div className='gap-11 flex flex-col items-center w-[526px]'>
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
                    <div className='w-full px-7 py-5 bg-white'></div>
                </div>
            </div>
        </div>
    );
};

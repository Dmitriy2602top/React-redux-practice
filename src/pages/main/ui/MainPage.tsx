import { FeaturedYachts } from 'widgets/featuredYachts';
import { SliderBlog } from 'widgets/slider';
import { YachtCharter } from 'widgets/yachtCharter';

const MainPage: React.FC = () => {
    return (
        <div className='flex-auto'>
            <YachtCharter
                bottomText='“Ciao cara, Tutto perfetto. Giornata top e anche al cafe Del Mar è stato molto bello.”'
                topText='LUXURY BOAT HIRE IN PHUKET'
                title='YACHT CHARTER PHUKET'
            />
            <FeaturedYachts />
            <SliderBlog />
        </div>
    );
};

export default MainPage;

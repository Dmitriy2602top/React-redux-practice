import { FeaturedYachts } from 'widgets/featuredYachts';
import { Header } from 'widgets/header/ui/Header';
import { YachtCharter } from 'widgets/yachtCharter';

const MainPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <YachtCharter
                    bottomText='“Ciao cara, Tutto perfetto. Giornata top e anche al cafe Del Mar è stato molto bello.”'
                    topText='LUXURY BOAT HIRE IN PHUKET'
                    title='YACHT CHARTER PHUKET'
                />
                <FeaturedYachts />
            </main>
        </div>
    );
};

export default MainPage;

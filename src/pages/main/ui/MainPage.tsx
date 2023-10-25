import { FeaturedYachts } from 'widgets/featuredYachts';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { YachtCharter } from 'widgets/yachtCharter';

const MainPage: React.FC = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='flex-auto'>
                <YachtCharter
                    bottomText='“Ciao cara, Tutto perfetto. Giornata top e anche al cafe Del Mar è stato molto bello.”'
                    topText='LUXURY BOAT HIRE IN PHUKET'
                    title='YACHT CHARTER PHUKET'
                />
                <FeaturedYachts />
            </main>
            <Footer />
        </div>
    );
};

export default MainPage;

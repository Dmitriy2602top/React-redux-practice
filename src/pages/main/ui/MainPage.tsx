import { Header } from 'widgets/header/ui/Header';
import { YachtCharter } from 'widgets/yachtCharter/ui/YachtCharter';

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
            </main>
        </div>
    );
};

export default MainPage;

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

interface LayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='flex-auto'>{children}</main>
            <Footer />
        </div>
    );
};

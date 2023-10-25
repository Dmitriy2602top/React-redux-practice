import { type FC } from 'react';
import { Link } from 'react-router-dom';
import Gal from 'shared/assets/icons/btnLanguage.svg';
import Logo from 'shared/assets/icons/logo.svg';
import LogoName from 'shared/assets/icons/logoName.svg';

export const Header: FC = () => {
    return (
        <header className='bg-white w-full'>
            <div className='container items-center py-9 flex justify-between'>
                <div className='flex items-center'>
                    <img src={Logo} />
                    <img src={LogoName} alt='HORIZON CRUISES' />
                </div>
                <div className='flex gap-6 text-text-header'>
                    <Link className='hover:text-text-header-hover' to=''>
                        Home
                    </Link>
                    <Link className='hover:text-text-header-hover' to=''>
                        Destinations
                    </Link>
                    <Link className='hover:text-text-header-hover' to=''>
                        About us
                    </Link>
                    <Link className='hover:text-text-header-hover' to=''>
                        Articles
                    </Link>
                    <Link className='hover:text-text-header-hover' to=''>
                        Contacts
                    </Link>
                </div>
                <div className='rounded-4 flex gap-2 p-2 border border-btn-black text-btn-black'>
                    <span>EN</span> <img src={Gal} />
                </div>
            </div>
        </header>
    );
};

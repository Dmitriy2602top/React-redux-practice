import classNames from 'classnames';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import instagram from 'shared/assets/icons/instaF.svg';
import logo from 'shared/assets/icons/logo.svg';
import logoName from 'shared/assets/icons/logoNameFooter.svg';
import telegram from 'shared/assets/icons/telegramF.svg';
import watsap from 'shared/assets/icons/watsapF.svg';
import water from 'shared/assets/image/water.png';
import { type PropsOf } from 'shared/lib';

interface FooterProps extends PropsOf<'div'> {}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={classNames('relative py-4 px-12', className)}>
            <img className='top-0 left-0 absolute h-full w-full object-cover -z-10' src={water} />
            <div className='flex flex-col gap-12 container justify-between'>
                <div className='flex justify-between'>
                    <nav className='flex gap-6 self-center text-white text-16 font-500'>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            Home
                        </Link>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            Yachts
                        </Link>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            Destinations
                        </Link>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            About us
                        </Link>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            Articles
                        </Link>
                        <Link className='hover:text-text-footer-accent transition-all' to={''}>
                            Contacts
                        </Link>
                    </nav>
                    <div className='flex-col flex'>
                        <h6 className='text-12 self-end text-text-footer-accent'>Call US</h6>
                        <div className='flex gap-8'>
                            <div className='flex gap-3'>
                                <img src={watsap} />
                                <img src={telegram} />
                                <img src={instagram} />
                            </div>
                            <div className=''>
                                <a className='text-24 text-white font-700 ' href='tel:+66 86 465 4545'>
                                    +66 86 465 4545
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-end'>
                    <div className='text-12 font-300 text-white'>
                        <p>2023 Horizon Cruises ©</p>
                    </div>
                    <div className='flex self-end items-center'>
                        <img src={logo} />
                        <img src={logoName} alt='HORIZON CRUISES' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

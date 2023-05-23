import './header.scss';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import beatAnalyticsIcon from '../../public/beat-analytics-icon.png';

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link href='/' className='logo' style={{ textDecoration: 'none' }}>
                <Image src={beatAnalyticsIcon} alt='Site logo' />
                <span>BeatAnalytics</span>
            </Link>
            <ul className='menu'>
                <li className='menuItem'>
                    <Link href='/profile'>My profile</Link>
                </li>
                <li className='menuItem'>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;

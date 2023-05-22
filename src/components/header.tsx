import './header.scss';

import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link href='/'>
                <div className='logo'>BeatAnalytics</div>
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

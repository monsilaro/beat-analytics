import './page.scss';

import React from 'react';

export default function Home() {
    return (
        <div className='home'>
            <div className='username-box'>
                <h2>{'Login to spofity'}</h2>

                <div className='spotify-login'></div>
            </div>
        </div>
    );
}

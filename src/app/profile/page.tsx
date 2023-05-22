import './page.scss';

import React from 'react';

export default function Profile() {
    const user = 'Simon';
    return (
        <div className='profile'>
            <h2>{`Welcome ${user}`}</h2>
        </div>
    );
}

'use client';

import './page.scss';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Song } from '../api/currently-playing/route';
import { Track } from '../api/tracks/route';

export default function Profile() {
    const user = 'Simon';
    const [topTracks, setTopTracks] = useState<Track[]>([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState<Song>({
        isPlaying: false,
    });

    useEffect(() => {
        // Run the fetch request only on the client-side
        if (typeof window !== 'undefined') {
            fetch('https://beat-analytics-monsilaro.vercel.app/api/tracks')
                .then((res) => res.json())
                .then((data) => {
                    setTopTracks(data);
                });

            fetch(
                'https://beat-analytics-monsilaro.vercel.app/api/currently-playing'
            )
                .then((res) => res.json())
                .then((data) => {
                    setCurrentlyPlaying(data);
                });
        }
    }, []);

    return (
        <div className='profile'>
            <h2>{`Welcome ${user}`}</h2>

            <div className='profile-section'>
                {currentlyPlaying.isPlaying ? (
                    <div className='currently-playing'>
                        <h3>Currently playing</h3>
                        <div className='track'>
                            <div className='track-info'>
                                <span className='track-name'>
                                    {currentlyPlaying.title}
                                </span>
                                <span className='track-artist'>
                                    {currentlyPlaying.artist}
                                </span>
                            </div>

                            {currentlyPlaying?.albumImageUrl && (
                                <Image
                                    src={currentlyPlaying.albumImageUrl}
                                    alt='Album cover'
                                    width={200}
                                    height={200}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    'Not playing'
                )}
            </div>

            <div className='profile-section'>
                {topTracks && topTracks?.length > 0 && (
                    <>
                        <h3>Top tracks</h3>
                        <div className='top-tracks'>
                            {topTracks.map((track) => {
                                console.log(track);
                                return (
                                    <div key={track.title} className='track'>
                                        <div className='track-info'>
                                            <span className='track-name'>
                                                {track.title}
                                            </span>
                                            <span className='track-artist'>
                                                {track.artist}
                                            </span>
                                        </div>

                                        <Image
                                            src={track.coverImage.url}
                                            alt='Album cover'
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

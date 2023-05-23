import { NextResponse } from 'next/server';
import { topTracks } from '../../../lib/spotify';

export type Track = {
    title: string;
    artist: string;
    url: string;
    coverImage: {
        url: string;
        width: number;
        height: number;
    };
};

export async function GET() {
    const response = await topTracks();
    const { items } = await response.json();

    const tracks = items
        .slice(0, 5)
        .map(
            (track: {
                name: string;
                artists: { name: string }[];
                external_urls: { spotify: string };
                album: { images: { url: string }[] };
            }) => ({
                title: track.name,
                artist: track.artists.map((_artist) => _artist.name).join(', '),
                url: track.external_urls.spotify,
                coverImage: track.album.images[1],
            })
        );

    return new NextResponse(JSON.stringify(tracks));
}

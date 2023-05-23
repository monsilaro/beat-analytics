import { NextResponse } from 'next/server';
import { currentlyPlayingSong } from '@/lib/spotify';

export type Song = {
    isPlaying: boolean;
    album?: string;
    albumImageUrl?: string;
    artist?: string;
    songUrl?: string;
    title?: string;
};

export async function GET() {
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
        return new NextResponse(JSON.stringify({ isPlaying: false }));
    }

    const song = await response.json();

    if (song.item === null) {
        return new NextResponse(JSON.stringify({ isPlaying: false }));
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
        .map((_artist: { name: string }) => _artist.name)
        .join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return new NextResponse(
        JSON.stringify({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        })
    );
}

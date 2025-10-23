export interface SongItem {
    Id: number;
    title: string;
    artist: string;
    price: string;
    genre: string;
    tag: string;
    coverImage?: string;
}


export const songs: SongItem[] = [
    {
        Id: 1,
        title: "Midnight Drive",
        artist: "Lyla & The Cosmic Wave",
        price: "$25.00",
        genre: "Indie Pop",
        tag: "Trending",
        coverImage: "/assets/song.jpg"
    },
    {
        Id: 2,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
    {
        Id: 3,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
    {
        Id: 4,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
];
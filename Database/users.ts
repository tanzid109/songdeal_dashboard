type User = {
    id: string
    photo?: string
    userId: number
    catalog?: string 
    email: string
    date?: string
    time?: string
    status: "live" | "pending"
    genre: string
    artist: string
    roi: number 
}

const photos = [
    "/assets/user.jpg",
    "/assets/user1.jpg",
    "/assets/user2.jpg",
    "/assets/user3.jpg",
    "/assets/user4.jpg",
    "/assets/user5.jpg",
]

const catalogs = [
    "Midnight Dreams", "Echoes of Tomorrow", "City Lights", "Golden Hour",
    "Velvet Nights", "Neon Skyline", "Lost Frequencies", "Ocean Drive",
    "Moonchild", "Electric Heart", "Dark Paradise", "Lover’s Code",
    "Crimson Skies", "Endless Summer", "Midday Mirage", "Silent Storm",
    "Frosted Glass", "Broken Compass", "Dreamcatcher", "Gravity Waves",
    "Paper Planes", "Eternal Bloom", "Waves of Time", "Wildfire", "Solstice",
]

const genres = [
    "Pop", "Rock", "Hip-Hop", "Jazz", "Classical",
    "EDM", "Country", "R&B", "Soul", "Indie",
]

const artists = [
    "Taylor Swift", "Drake", "The Weeknd", "Adele", "Ed Sheeran",
    "Beyoncé", "Billie Eilish", "Bruno Mars", "Kanye West", "Dua Lipa",
]

export const data: User[] = Array.from({ length: 50 }, (_, i) => {
    const photo = photos[i % photos.length]
    const catalog = catalogs[i % catalogs.length]
    const status = i % 2 === 0 ? "live" : "pending"
    const genre = genres[i % genres.length]
    const artist = artists[i % artists.length]
    const roi = Math.floor(Math.random() * 90) + 10 // 10–99%

    return {
        id: String(i + 1).padStart(2, "0"),
        photo,
        userId: 10000 + i,
        catalog,
        email: `${artist.toLowerCase().replace(/\s+/g, "")}${i + 1}@gmail.com`,
        date: `${(i % 28) + 1}th Oct, 2023`,
        time: `${(i % 12) + 1}:${(i * 7 % 60)
            .toString()
            .padStart(2, "0")} ${i % 2 === 0 ? "AM" : "PM"}`,
        status,
        genre,
        artist,
        roi,
    }
})

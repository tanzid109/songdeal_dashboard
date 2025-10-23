"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Music } from "lucide-react";
import Link from "next/link";

export interface SongItem {
    Id: number;
    title: string;
    artist: string;
    price: string;
    genre: string;
    tag: string;
    coverImage?: string;
}

interface MusicCatalogProps {
    songs: SongItem[];
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};
const handleDetailsClick = (SongID : number) => {
    console.log(SongID);
}

export default function SongCard({ songs }: MusicCatalogProps) {
    return (
        <section className="w-full p-0 m-0">
            <div className=" px-4 md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {songs.map((song, index) => (
                        <motion.div
                            key={song.Id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="h-full "
                        >
                            <Card className="h-full border-2 bg-[#635BFF1A] backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group pt-0">
                                <CardContent className="p-0">
                                    {/* Album Art */}
                                    <div className="relative h-52 overflow-hidden transition-all duration-300">
                                        {/* Image Layer */}
                                        {song.coverImage ? (
                                            <motion.img
                                                src={song.coverImage}
                                                alt={song.title}
                                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                                            // initial={{ scale: }}
                                            // whileHover={{ scale: 1.1 }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                                                No Image
                                            </div>
                                        )}

                                        {/* Overlay Play Button
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm"
                                            >
                                                <Play className="h-8 w-8 text-white ml-1" />
                                            </motion.div>
                                        </div> */}

                                        {/* Tag */}
                                        <div className="absolute top-4 left-4">
                                            <motion.span
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + 0.3 }}
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg bg-gradient-to-r from-purple-600 to-blue-500"
                                            >
                                                <TrendingUp className="h-3 w-3" />
                                                {song.tag}
                                            </motion.span>
                                        </div>

                                        {/* Price */}
                                        <div className="absolute top-4 right-4">
                                            <motion.span
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + 0.4 }}
                                                className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-lg font-bold text-gray-900 shadow-lg"
                                            >
                                                {song.price}
                                            </motion.span>
                                        </div>
                                    </div>

                                    {/* Song Info */}
                                    <div className="p-6">
                                        <motion.h3
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                            className="text-xl font-bold text-[#635BFF] mb-2 line-clamp-1"
                                        >
                                            {song.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.6 }}
                                            className="text-gray-600 text-sm mb-4 line-clamp-1"
                                        >
                                            by {song.artist}
                                        </motion.p>

                                        <div className="flex items-center justify-between">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 + 0.7 }}
                                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#635BFF33] text-gray-700 text-sm font-medium"
                                            >
                                                <Music className="h-3 w-3" />
                                                {song.genre}
                                            </motion.span>

                                            <Link href={`/marketplace/${song.Id}`}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.8 }}
                                                >
                                                    <Button onClick={() =>handleDetailsClick(song.Id)} size="sm">View Details</Button>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

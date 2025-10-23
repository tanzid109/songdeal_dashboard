"use client";

import RoleSelectionModal from "@/auth/register/RoleSelectionModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Revolution() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="w-full bg-[#635BFF1A] lg:py-52 py-6 text-center">
            <div className="max-w-3xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
                >
                    Join the Music Revolution Today
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-600 text-base sm:text-lg mb-8"
                >
                    Whether you’re creating, investing, or simply a fan, there’s a place
                    for you at Songdeal. Sign up now and be part of the future of music.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button variant="default" className="w-full md:w-auto"
                        onClick={() => setIsModalOpen(true)}>
                        Sign up as Artist
                    </Button>
                    <Button variant="secondary" className="w-full md:w-auto"
                        onClick={() => setIsModalOpen(true)}>
                        Sign up as Investor
                    </Button>
                </motion.div>
            </div>
            {/* Role Selection Modal */}
            <RoleSelectionModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </section>
    );
}

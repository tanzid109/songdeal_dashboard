"use client";
import React, { useState } from 'react';
import { Info, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function BasicProfileInformation() {
    const [displayName, setDisplayName] = useState('Bryan Adams');
    const [email, setEmail] = useState('bryanadams@gmail.com');
    const [country, setCountry] = useState('USA');
    const [city, setCity] = useState('Lyndon');
    const [bio, setBio] = useState('I specialize in HRM role');

    const handleSave = () => {
        console.log('Profile saved:', { displayName, email, country, city, bio });
    };

    return (
        <div className=" bg-gray-50 p-6 md:p-10">
            <div className="shadow-blue-400 shadow-md bg-white rounded-lg p-8">
                {/* Header */}
                <div className="flex items-center gap-2 mb-8 pb-6 border-b border-gray-200">
                    <h1 className="text-xl font-medium text-gray-700">Profile Information</h1>
                    <Info className="w-5 h-5 text-gray-400" />
                </div>

                {/* Photo Profile */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Photo Profile
                    </label>
                    <div className="relative w-24 h-24">
                        <Image
                            src="/assets/user1.jpg"
                            height={96}
                            width={96}
                            alt="Profile"
                            className="w-24 h-24 rounded-2xl object-cover"
                        />
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                            <Pencil className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                {/* Display Name */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Display Name
                    </label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Country and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Country
                        </label>
                        <div className="relative">
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                            >
                                <option value="Nigeria">Nigeria </option>
                                <option value="Mali">Mali</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Egypt">Egypt</option>
                            </select>
                            <svg
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            City
                        </label>
                        <div className="relative">
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                            >
                                <option value="Lyndon">Lagos</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Ibadan">Ibadan</option>
                                <option value="Port Harcourt">Port Harcourt</option>
                            </select>
                            <svg
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                    </label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                </div>

                {/* Save Button */}
                <Button
                    onClick={handleSave}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
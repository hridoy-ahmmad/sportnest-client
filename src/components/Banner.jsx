'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <section
            className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/30"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-20 sm:py-28 lg:py-36 max-w-4xl">

                    {/* Badge */}
                    <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-5 sm:mb-7">
                        Sports Facility Booking Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl lg:text-6xl font-black leading-tight text-white">
                        Find & Book Your Favorite <br />
                        <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                            Sports Facilities
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 sm:mt-7 max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                        Discover premium football fields, cricket grounds, badminton courts, gyms, and more — all in one place. Fast booking, smooth experience, and top-rated venues.
                    </p>

                    {/* Button */}
                    <div className="mt-8 sm:mt-10">
                        <Link href="/all-facilities">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-linear-to-r from-sky-500 to-blue-700 text-white font-semibold px-7 sm:px-8 h-12 sm:h-14 rounded-2xl shadow-2xl text-sm sm:text-base"
                            >
                                Explore Facilities
                                <FaArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
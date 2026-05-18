'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <section
            className="
                relative
                min-h-[85vh]
                flex items-center
                overflow-hidden
                bg-cover
                bg-center
            "
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop')",
            }}
        >

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/30"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="max-w-4xl py-24 sm:py-32">

                    {/* Badge */}
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6">
                        #1 Sports Facility Booking Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                        Find & Book Your Favorite
                        <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                            Sports Facilities
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                        Discover premium football fields, cricket grounds,
                        badminton courts, gyms, and more — all in one place.
                        Fast booking, smooth experience, and top-rated venues.
                    </p>

                    {/* Button */}
                    <div className="mt-10">
                        <Link href="/all-facilities">
                            <Button
                                size="lg"
                                className="
                                    bg-gradient-to-r
                                    from-sky-500
                                    to-blue-700
                                    text-white
                                    font-semibold
                                    px-8
                                    h-14
                                    rounded-2xl
                                    shadow-2xl
                                "
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
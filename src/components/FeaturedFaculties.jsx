import React from 'react';
import FacultyCard from './FacultyCard';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { ArrowChevronRight } from '@gravity-ui/icons';

const FeaturedFaculties = async () => {

    const res = await fetch('http://localhost:5000/faculties')
    const data = await res.json()
    const featuredFaculties = data.slice(0, 6)

    return (
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

    {/* Heading */}
    <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
            Featured Facilities
        </h1>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our most popular and highly rated sports facilities
            for football, cricket, badminton, swimming, and more.
        </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
            featuredFaculties.map(faculty => (
                <FacultyCard
                    key={faculty._id}
                    faculty={faculty}
                />
            ))
        }
    </div>

    {/* Button */}
    <div className="flex justify-center items-center mt-12">
        <Button
            className="
                bg-gradient-to-r
                from-sky-500
                to-blue-700
                text-white
                font-semibold
                rounded-2xl
                px-7
                h-12
                shadow-lg
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                active:scale-95
            "
        >
            <Link
                href="all-facilities"
                className="flex items-center gap-2"
            >
                View All Facilities
                <ArrowChevronRight />
            </Link>
        </Button>
    </div>

</div>
    );
}

export default FeaturedFaculties;
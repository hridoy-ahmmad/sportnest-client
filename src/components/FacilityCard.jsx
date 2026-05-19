import React from 'react'
import { FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa'
import { Button } from '@heroui/react'
import Link from 'next/link'
import Image from 'next/image'

const FacilityCard = ({ faculty }) => {
    const {
        _id,
        name,
        image_url,
        location,
        price_per_hour,
        rating,
        capacity,
        available_slots
    } = faculty

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            {/* Image */}
            <div className="relative overflow-hidden">
                <Image
                    src={image_url}
                    alt={name}
                    height={400}
                    width={600}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                    <FaStar className="text-yellow-400" />
                    {rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    {location}
                </div>

                {/* Capacity */}
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <FaUsers className="text-blue-500" />
                    Capacity: {capacity}
                </div>

                {/* Slots */}
                <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        Available Slots:
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {available_slots?.map((slot, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                            >
                                {slot}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <p className="mt-4 text-gray-800 font-bold">
                    $ {price_per_hour} / hour
                </p>

                {/* Button */}
                <div className="mt-5">
                    <Link href={`/all-facilities/${_id}`}>
                        <Button

                            className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-xl h-11 shadow-md hover:shadow-xl transition-all"
                        >
                            Book Now
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FacilityCard
'use client'

import Image from 'next/image'
import React from 'react'
import {
    FaStar,
    FaMapMarkerAlt,
    FaUsers,
    FaClock
} from 'react-icons/fa'
import { MdOutlineSportsTennis } from 'react-icons/md'

const FacilityDetails = ({ data }) => {
    if (!data) return null
    const {
        name,
        image_url,
        location,
        price_per_hour,
        capacity,
        available_slots,
        description,
        facility_type,
        owner_email
    } = data

    return (
        <section className="py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div>

                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-xs">
                        <Image
                            src={image_url} 
                            alt={name}
                            width={800}
                            height={600}
                            className="w-full h-[300px] sm:h-[450px] object-cover"
                            priority 
                        />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-xs">
                            <MdOutlineSportsTennis className="text-blue-600" />
                            {facility_type}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                            {name}
                        </h1>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-500 mt-4">
                            <FaMapMarkerAlt className="text-blue-600" />
                            {location}
                        </div>
                        {/* Description */}
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            {description}
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/50">
                                <p className="text-sm text-gray-500 font-medium">Price Per Hour</p>
                                <h3 className="text-2xl font-black text-blue-700 mt-1">
                                    ${price_per_hour}
                                </h3>
                            </div>

                        </div>

                        {/* Capacity */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                <FaUsers className="text-blue-600 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Capacity</p>
                                <h4 className="font-semibold text-gray-900">{capacity}</h4>
                            </div>
                        </div>

                        {/* Available Slots */}
                        <div className="mt-8">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaClock className="text-blue-600" />
                                Available Slots
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {available_slots?.map((slot, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 token-slot"
                                    >
                                        {slot}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Extra Info */}
                        <div className="mt-8 space-y-3 p-4 border border-gray-200 rounded-2xl bg-gray-50    ">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                <span className="text-gray-500">Owner Email</span>
                                <span className="font-semibold text-gray-800">{owner_email}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacilityDetails
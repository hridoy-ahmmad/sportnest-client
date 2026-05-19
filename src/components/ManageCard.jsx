import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaPeopleRoof } from 'react-icons/fa6';
import { HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2';
import { MdOutlineEmail, MdOutlinePriceChange } from 'react-icons/md';
import { CancelBooking } from './CancelBooking';
import { BiEditAlt } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';

const ManageCard = ({ item }) => {
    const {
        image,
        name,
        price_per_hour,
        _id,
        location,
        capacity
    } = item;

    return (
        <Card className="w-full mt-3 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch">
            {/* Image Section */}
            <div className="w-full sm:w-48 h-48 sm:h-auto relative shrink-0">
                <Image
                    fill
                    src={image}
                    alt={name}
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col justify-between grow gap-4">
                {/* Top Content Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">

                    {/* Left Content: Text & Tags */}
                    <div className="space-y-3 w-full">
                        <div className="space-y-1">
                            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                ID: {_id}
                            </p>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-tight">
                                    Facility:
                                </span>
                                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                                    {name}
                                </h2>
                            </div>
                        </div>

                        {/* Meta Row (Badges/Tags) */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {/* location */}
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-medium">
                                <FaLocationDot size={14} className="text-gray-400" />
                                <span>Location: <strong className="text-gray-700">{location}</strong></span>
                            </div>


                            {/* Price */}
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
                                <MdOutlinePriceChange size={14} className="text-emerald-600" />
                                <span>${price_per_hour}/ hr(s)</span>
                            </div>

                            {/* capacity */}
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
                                <FaPeopleRoof size={14} className="text-emerald-600" />
                                <span>{capacity} </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Desktop Cancel Button */}
                    <div className="hidden md:block shrink-0 ">
                        <div className='flex flex-col gap-2 items-end'>
                                <Button>
                                    <BiEditAlt /> Edit Facility
                                </Button>
                            
                                <Button variant='danger'>
                                    <FaTrashAlt /> Remove Facility
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Footer Line & Contact */}
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">


                    {/* Mobile/Tablet Cancel Button */}
                    <div className="block md:hidden w-full">
                        {/* ---------- */}


                    </div>
                </div>
        </Card>
    );
};

export default ManageCard;